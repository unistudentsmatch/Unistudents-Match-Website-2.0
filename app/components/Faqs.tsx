import React from "react";
import Image from "next/image";

const Faqs = () => {
	const questions = [
		{ question: "I have a question or enquiry, how do I contact unistudents match?", answer: "We can be emailed at unistudentsmatch@gmail.com - but we kindly ask that you read through our FAQs first, as the vast majority of questions you will have can be answered here." },
		{ question: "How Islamic is the unistudents match process?", answer: "We follow the Quran and Sunnah. We take pride in making sure our matchmaking service is Islamic as possible. This includes not being able to send photos to each other and algorithms are in place to monitor messages that are inappropriate." },
		{ question: "How much does unistudents match cost?", answer: "Free for 30 days ! After that we charge a fee of £14.99 per month …" },
		{ question: "For a sister signing up to unistudents match, what is the involvement of the Wali?", answer: "When signing up to unistudents match, all sisters will need to include their contact details of their guardian." },
		{ question: "How do you match people?", answer: "Once you have signed up to the subscription, you will be given access to the database where you can connect with other brothers and sisters. You can view their profiles and directly message them." },
		{ question: "How many profiles am I allowed to contact on unistudents match?", answer: "Unlimited! That’s right. You can contact as many as you like. Unlike some other matchmaking services where they limit you to 3 requests a month. You will be given unlimited for the same price." },
		{ question: "Who can sign up?", answer: "All university students who are currently at university and all students who have already graduated." },
		{ question: "I am from outside of UK, can I still sign up?", answer: "Yes! As long as you're a student or a graduate, you can sign up from anywhere in the world." },
	];

	return (
		<>
			<section className="md:mt-10 xl:mt-24 mt-5  md:mb-24 xl:mb-44 mb-10 xl:p-20 p-6">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
					<div className="xl:pl-32 xl:py-5 ">
						<div className="mt-1 mb-10 block md:hidden xl:hidden">
							<Image
								src="/images/ques.jpg"
								alt=""
								width="0"
								height="0"
								sizes="100vw"
								className="w-full rounded-lg"
							/>
						</div>
						<h1 className="font-bold md:text-3xl xl:text-3xl text-2xl text-black mb-10">Frequently Asked Questions</h1>
						{questions.map((faq) => (
							<div
								key={faq.question}
								tabIndex={0}
								className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5">
								<div className="collapse-title text-md font-meduim">{faq.question}</div>
								<div className="collapse-content">
									<p className="text-base font-light">{faq.answer}</p>
								</div>
							</div>
						))}
					</div>

					<div className="xl:pr-32 md:px-10 px-3 hidden md:block xl:block">
						<Image
							src="/images/ques.jpg"
							alt=""
							width="0"
							height="0"
							sizes="100vw"
							className="w-full rounded-lg"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faqs;
