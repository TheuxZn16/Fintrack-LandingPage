import { FaUser } from 'react-icons/fa';

function Hero() {
	return (
		<div
			className="p-3"
			style={{
				background: 'linear-gradient(160deg, #E8F7F1, #fff)',
			}}
		>
			<div>
				<img
					src="/public/logos/Logo1-png.png"
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
						src="/public/logos/MockupCell.png"
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
				<a href="@">
					<button
						type="button"
						className="border border-gray-500 rounded-lg p-3 text-xl font-secondary-font font-semibold cursor-pointer hover:from-[#45cc7e] hover:to-[#77f2ab] bg-linear-to-br from-secondary to-primary"
					>
						Baixar Agora
					</button>
				</a>
			</div>
		</div>
	);
}

export default Hero;
