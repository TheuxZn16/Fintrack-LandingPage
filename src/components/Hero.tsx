import { FaUser } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

function Hero() {
	return (
		<section
			className="p-3 pb-8"
			style={{
				background: 'linear-gradient(160deg, #E8F7F1, #fff)',
			}}
		>
			<div>
				<img
					src="/logos/Logo1-png.png"
					alt="Logo FinTrack"
					className="md:h-14 h-8"
				/>
			</div>
			<div className="w-full h-full text-center gap-8 flex flex-col justify-center items-center mt-3">
				<div>
					<h1 className="text-text-primary font-primary-font font-bold mb-4 md:text-5xl sm:text-3xl text-2xl">
						Controle suas finanças com inteligência!
					</h1>
					<h2 className="text-text-primary font-primary-font font-semibold md:text-3xl sm:text-xl text-lg">
						Acompanhe gastos, crie metas e veja seu dinheiro crescer com o
						FinTrack.
					</h2>
				</div>
				<div>
					<img
						className="w-96"
						src="/logos/MockupCell.png"
						alt="Mockup da interface do app"
					/>
					<div className="p-1 bg-accent border border-gray-400 rounded-lg inline-block">
						<p className="flex items-center text-gray-300 text-xs">
							<span className="pr-2">
								<FaUser />
							</span>
							+10.000 usuários ativos
						</p>
					</div>
				</div>
				<a href="#EndCTA">
					<button
						type="button"
						className="flex cursor-pointer items-center gap-3 bg-primary text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-md hover:shadow-xl transition-all"
					>
						<LuDownload size={24} /> Baixar App Gratuitamente
					</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
