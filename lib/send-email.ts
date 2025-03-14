import {Resend} from "resend";

export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	const {data, error} = await resend.emails.send({
		from: "onboarding@resend.dev",
		to,
		subject,
		// text: "",
		react: template,
	});

	if (error) {
		throw error;
	}

	return data;
};

// resend.emails.send({
// 	from: "onboarding@resend.dev",
// 	to: "wowa.pol@ukr.net",
// 	subject: "Hello World",
// 	html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });
