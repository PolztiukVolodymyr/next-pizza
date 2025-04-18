import {InfoBlock} from "@/components/shared/info-block";

export default function UnauthorizedPage() {
	return (
		<div className="flex flex-col items-center justify-center mt-40">
			<InfoBlock
				title="Доступ заборонено"
				text="Цю сторінку можуть переглядати лише авторизовані користувачі"
				imageUrl="/locked.webp"
			/>
		</div>
	);
}
