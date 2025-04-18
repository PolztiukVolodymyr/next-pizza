"use client";

import {useFormContext} from "react-hook-form";
import {Input} from "../../ui/input";
import {ClearButton} from "../clear-button";
import {ErrorText} from "../error-text";
import {RequiredSymbol} from "../required-symbol";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
}

export const FormInput: React.FC<Props> = ({className, name, label, required, ...props}) => {
	const {
		register,
		formState: {errors},
		watch,
		setValue,
	} = useFormContext();

	const value = watch(name);
	const errorText = errors[name]?.message as string;

	const onClickClear = () => {
		setValue(name, "", {shouldValidate: true});
	};

	return (
		<div className={className}>
			{label && <p className="font-normal mb-1 lg:font-medium lg:mb-2">{label}</p>}

			<div className="relative">
				<Input className="h-12 text-md" {...register(name)} {...props} />
				{value && <ClearButton onClick={onClickClear} />}
				{required && <RequiredSymbol />}
			</div>

			{errorText && <ErrorText text={errorText} className="mt-2" />}
		</div>
	);
};
