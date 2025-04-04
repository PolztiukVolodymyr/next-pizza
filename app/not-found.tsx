import {InfoBlock} from "@/components/shared/info-block";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center mt-40">
			<InfoBlock
				title="Щось пішло не так..."
				text="Такої сторінки не існує"
				imageUrl="/error_fence.webp"
			/>
		</div>
	);
}
