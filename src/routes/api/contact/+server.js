export const prerender = false;

import { error } from '@sveltejs/kit';

import {
	SMTP_HOST,
	SMTP_USER,
	SMTP_PASS,
	SMTP_FROM,
} from '$env/static/private';

import { createTransport } from 'nodemailer';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const data = await request.formData();
	const name = data.get('name');
	const email = data.get('email');
	const phone = data.get('phone');
	const message = data.get('message');

	// create reusable transporter object using the default SMTP transport
	let transporter = createTransport({
		host: SMTP_HOST,
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS,
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: `"${name}" <${SMTP_FROM}>`, // sender address
		to: 'hello@lukeshafer.com', // list of receivers
		subject: `Form Submission from ${name}`, // Subject line
		text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`, // plain text body
		html: `
			<ul>
			<li>Name: ${name}</li>
			<li>Email: ${email || 'Not provided'}</li>
			<li>Phone: ${phone || 'Not provided'}</li>
			<li>Message: <br>${message}</li>
			</ul>
			`, // html body
	});

	if (info.rejected.length > 0) throw error(500, `Unable to send message: `);
	else return new Response(JSON.stringify({ success: true }), { status: 200 });
}
