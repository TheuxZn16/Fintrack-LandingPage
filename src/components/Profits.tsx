import {
	LuChartBarIncreasing,
	LuChartPie,
	LuShieldCheck,
	LuTarget,
} from 'react-icons/lu';

function Profits() {
	return (
		<div className="bg-[#F9FCFB] py-20 px-5">
			{/* Título da seção */}
			<div className="text-center mb-12">
				<h1 className="text-5xl md:text-6xl font-bold font-primary-font text-text-primary">
					Por que usar o FinTrack?
				</h1>
				<p className="text-text-secondary text-lg mt-3 max-w-xl mx-auto">
					Recursos inteligentes para transformar sua vida financeira.
				</p>
			</div>

			{/* Grid responsivo */}
			<div className="flex flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto">
				{/* Card 1 */}
				<div className="w-full sm:w-[45%] lg:w-[23%] rounded-2xl p-5 shadow-lg text-white bg-linear-to-br from-primary to-secondary flex flex-col gap-4">
					<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
						<LuChartPie size={28} className="text-white" />
					</div>

					<h3 className="text-xl font-semibold">
						Controle Inteligente de Gastos
					</h3>

					<p className="text-white/90 leading-relaxed">
						Acompanhe seus gastos automaticamente com categorias organizadas e
						gráficos que simplificam sua visualização financeira.
					</p>
				</div>

				{/* Card 2 */}
				<div className="w-full sm:w-[45%] lg:w-[23%] rounded-2xl p-5 shadow-lg text-white bg-linear-to-br from-accent to-[#2574A9] flex flex-col gap-4">
					<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
						<LuTarget size={28} className="text-white" />
					</div>

					<h3 className="text-xl font-semibold">
						Metas Financeiras Automatizadas
					</h3>

					<p className="text-white/90 leading-relaxed">
						Defina metas como poupança, investimentos ou emergências e acompanhe
						o progresso automaticamente.
					</p>
				</div>

				{/* Card 3 */}
				<div className="w-full sm:w-[45%] lg:w-[23%] rounded-2xl p-5 shadow-lg text-white bg-linear-to-br from-[#6C5CE7] to-[#A29BFE] flex flex-col gap-4">
					<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
						<LuChartBarIncreasing size={28} className="text-white" />
					</div>

					<h3 className="text-xl font-semibold">Relatórios em Tempo Real</h3>

					<p className="text-white/90 leading-relaxed">
						Visualize seu desempenho financeiro atualizado instantaneamente com
						métricas, gráficos e comparações mensais.
					</p>
				</div>

				{/* Card 4 */}
				<div className="w-full sm:w-[45%] lg:w-[23%] rounded-2xl p-5 shadow-lg text-white bg-linear-to-br from-[#F39C12] to-[#F1C40F] flex flex-col gap-4">
					<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
						<LuShieldCheck size={28} className="text-white" />
					</div>

					<h3 className="text-xl font-semibold">
						Segurança e Proteção dos Dados
					</h3>

					<p className="text-white/90 leading-relaxed">
						Tecnologia de criptografia avançada para garantir que seus dados
						financeiros estejam sempre protegidos.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Profits;
