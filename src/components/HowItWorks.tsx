import { LuBell, LuChartLine, LuCoins, LuSmartphone } from 'react-icons/lu';

function HowItWorks() {
	return (
		<section className="w-full bg-white py-20 px-6 md:px-16 lg:px-32">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="flex justify-center lg:justify-start">
					<img
						className="w-sm"
						src="/logos/MockupCell.png"
						alt="Mockup do aplicativo"
					/>
				</div>

				<div className="flex flex-col gap-8">
					<h2 className="text-4xl font-bold text-text-primary leading-tight">
						Como o FinTrack funciona
					</h2>
					<p className="text-text-secondary max-w-lg">
						O FinTrack foi desenvolvido para tornar o controle financeiro
						simples, rápido e totalmente seguro.
					</p>

					<div className="flex flex-col gap-6">
						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/20 rounded-xl">
								<LuSmartphone size={28} />
							</div>
							<div>
								<h3 className="text-xl font-semibold">1. Baixe o App</h3>
								<p className="text-text-secondary text-sm max-w-md">
									Disponível na Play Store e App Store para você começar
									imediatamente.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/20 rounded-xl">
								<LuCoins size={28} />
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									2. Conecte suas contas
								</h3>
								<p className="text-text-secondary text-sm max-w-md">
									Integração segura para sincronizar suas transações
									automaticamente.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/20 rounded-xl">
								<LuChartLine size={28} />
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									3. Visualize seus gastos
								</h3>
								<p className="text-text-secondary text-sm max-w-md">
									Veja gráficos inteligentes e receba insights personalizados.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/20 rounded-xl">
								<LuBell size={28} />
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									4. Receba alertas automáticos
								</h3>
								<p className="text-text-secondary text-sm max-w-md">
									Fique por dentro de limites, metas e gastos inesperados.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
