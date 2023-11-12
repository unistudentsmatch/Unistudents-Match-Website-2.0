import Link from "next/link";
import React from "react";

const Privacy = () => {
	return (
		<div className="m-10 xl:m-25 md:m-20">
			<h1 className="text-2xl font-bold text-black mb-10">Privacy Policy</h1>

			<p className="mb-5">Unistudents Match&nbsp;(the “Company”) respects the privacy concerns of the users of its website, www.unistudents.com and the services provided therein (the “Site”). The Company thus provides this privacy statement to explain what information is gathered during a visit to the Site and how such information may be used.</p>

			<p className="mb-5">
				Your use of the Company’s services and this site are also governed by those of Unistudents Match, UK. Please also review the Unistudents Match® website Terms of Use at&nbsp;
				<Link
					className="text-blue-700"
					href="https://unistudentsmatch.com/t&amp;c">
					https://unistudentsmatch.com/t&amp;c
				</Link>{" "}
				which also govern use of this Site.
			</p>

			<p className="mb-5">
				<span className="font-bold text-black">Use of Information:</span> As a general policy, no personally identifiable information, such as your name, address, or e-mail address, is automatically collected from your visit to the Site. However, certain non-personal information is recorded by the standard operation of the Company’s internet servers. Information such as the type of browser being used, its operating system, and your IP address is gathered in order to enhance your online experience.
			</p>

			<p>
				The Site’s various mailing lists, downloads, special offers, contests, registration forms, and surveys may request that you give us contact information such as your name, mailing and/or e-mail address, demographic information such as your age and gender, and personal preference information such as your preferred software and interests. Information submitted at the time of submission will be used by the Company only as necessary for our legitimate business interests, including without limitation the improvement of our products, services and the contents of the Site. The Company may also share such information with our business and promotional partners to further those interests. Personally identifiable information is never sold or leased to any third parties. With your permission, we may use your contact information to send you information about our company and products. You may
				always opt-out of receiving future mailings as provided below. The Company does not store any credit card information it may receive in regard to a specific transaction and/or billing arrangement except as necessary to complete and satisfy its rights and obligations with regard to such transaction, billing arrangement, and/or as otherwise authorized by a user.
			</p>
		</div>
	);
};

export default Privacy;
