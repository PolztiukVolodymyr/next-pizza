import {FC} from "react";

type Props = {
	orderId: number;
	totalAmount: number;
	paymentUrl: string;
};

export const PayOrderTemplate: FC<Props> = ({orderId, totalAmount, paymentUrl}) => (
	<div>
		<h1>Замовлення #{orderId}</h1>

		<p>
			Оплатіть замовлення на суму <b>{totalAmount} грн</b>. Перейдіть
			<a href={paymentUrl}>за цим посиланням</a>
			для оплати замовлення.
		</p>
	</div>
);
