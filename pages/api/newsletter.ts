// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method === "POST") {
		const { email } = req.body;
		try {
			const subscriber = await prisma.newsletterSignup.create({
				data: {
					email,
				},
			});
			res.status(200).json({ id: subscriber.id, email: subscriber.email });
		} catch (error) {
			res
				.status(500)
				.json({ error: "Email could not be added to the database" });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} not allowed`);
	}
}
