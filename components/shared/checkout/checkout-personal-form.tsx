import React from "react";
import {WhiteBlock} from "../white-block";
import {FormInput} from "../form/form-input";

interface Props {
	className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({className}) => {
	return (
		<WhiteBlock title="2. Персональні дані" className={className}>
			<div className="grid grid-cols-2 gap-5">
				<FormInput name="firstName" required className="text-base" placeholder="Ім'я" />
				<FormInput name="lastName" className="text-base" placeholder="Прізвище" />
				<FormInput name="email" required className="text-base" placeholder="e-mail" />
				<FormInput name="phone" required className="text-base" placeholder="телефон" />
			</div>
		</WhiteBlock>
	);
};
