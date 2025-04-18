import {FC} from "react";
import {cn} from "@/lib/utils";
import {WhiteBlock} from "./white-block";
import {CheckoutItemDetails} from "./checkout-item-details";
import {ArrowRight, Package, Percent, Truck} from "lucide-react";
import {Skeleton} from "../ui/skeleton";
import {Button} from "../ui/button";

const VAT = 10; // податок 10%
const DELIVERY_PRICE = 100; //  доставка 100грн.

type Props = {
	totalAmount: number;
	loading?: boolean;
	className?: string;
};

export const CheckoutSidebar: FC<Props> = ({totalAmount, loading, className}) => {
	const vatPrice = (totalAmount * VAT) / 100;
	const shippingPrice = totalAmount ? DELIVERY_PRICE : 0;
	const totalPrice = totalAmount + shippingPrice + vatPrice;

	return (
		<WhiteBlock className={cn("p-6 sticky top-4", className)}>
			<div className="flex flex-col gap-1">
				<span className="text-xl">Всього:</span>
				{loading ? (
					<Skeleton className="h-11 w-48" />
				) : (
					<span className="h-11 text-[34px] font-extrabold">{totalPrice} грн.</span>
				)}
			</div>

			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Package size={18} className="mr-2 text-gray-400" />
						Вартість корзини:
					</div>
				}
				value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${totalAmount} грн.`}
			/>
			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Percent size={18} className="mr-2 text-gray-400" />
						Податки:
					</div>
				}
				value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${vatPrice} грн.`}
			/>
			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Truck size={18} className="mr-2 text-gray-400" />
						Доставка:
					</div>
				}
				value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${shippingPrice} грн.`}
			/>

			<Button
				loading={loading}
				type="submit"
				className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
			>
				Перейти до оплати
				<ArrowRight className="w-5 ml-2" />
			</Button>
		</WhiteBlock>
	);
};
