import $ from 'cafy';
import User, { ILocalUser } from '../../../../models/user';
import event from '../../../../stream';

export default async (params: any, user: ILocalUser) => new Promise(async (res, rej) => {
	// Get 'home' parameter
	const [home, homeErr] = $.arr($.obj({
		name: $.str,
		id: $.str,
		data: $.obj()
	}).strict()).get(params.home);
	if (homeErr) return rej('invalid home param');

	await User.update(user._id, {
		$set: {
			'clientSettings.mobileHome': home
		}
	});

	res();

	event(user._id, 'mobile_home_updated', home);
});
