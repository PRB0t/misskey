import $ from 'cafy';
import User, { ILocalUser } from '../../../../models/user';
import event from '../../../../stream';

/**
 * Update myself
 */
export default async (params: any, user: ILocalUser) => new Promise(async (res, rej) => {
	// Get 'name' parameter
	const [name, nameErr] = $.str.get(params.name);
	if (nameErr) return rej('invalid name param');

	// Get 'value' parameter
	const [value, valueErr] = $.any.nullable.get(params.value);
	if (valueErr) return rej('invalid value param');

	const x: any = {};
	x[`clientSettings.${name}`] = value;

	await User.update(user._id, {
		$set: x
	});

	res();

	// Publish event
	event(user._id, 'clientSettingUpdated', {
		key: name,
		value
	});
});
