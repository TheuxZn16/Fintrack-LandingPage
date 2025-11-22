import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

function EndCTA() {
	return (
		<section
			id="EndCTA"
			className="w-full bg-primary py-20 px-6 md:px-16 lg:px-32 text-white"
		>
			<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
				<h2 className="text-4xl md:text-5xl font-bold leading-tight">
					Pronto para dominar suas finanças?
				</h2>

				<p className="text-lg md:text-xl max-w-2xl opacity-90">
					Tenha controle total dos seus gastos e alcance suas metas com
					inteligência.
				</p>

				<button
					type="button"
					className="flex cursor-pointer items-center gap-3 bg-white text-primary font-semibold py-4 px-8 rounded-2xl text-lg shadow-md hover:shadow-xl transition-all"
				>
					<LuDownload size={24} /> Baixar App Gratuitamente
				</button>

				<div className="flex flex-col items-center gap-2 opacity-90 text-sm mt-4">
					<span>Disponível em:</span>
					<div className="flex gap-4">
						<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
							<FaAppStore className="text-3xl" />
						</div>
						<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
							<BiLogoPlayStore className="text-3xl" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default EndCTA;
