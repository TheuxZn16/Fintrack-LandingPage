import { FaUserCircle } from 'react-icons/fa';
import { LuStar } from 'react-icons/lu';

function Reviews() {
	const reviews = [
		{
			name: 'Mariana Silva',
			role: 'Designer',
			text: 'O FinTrack mudou completamente a forma como eu organizo minhas finanças. Simples e eficiente!',
		},
		{
			name: 'Lucas Andrade',
			role: 'Desenvolvedor',
			text: 'Finalmente consegui ter clareza para alcançar minhas metas financeiras. App indispensável!',
		},
		{
			name: 'Ana Costa',
			role: 'Empreendedora',
			text: 'Gráficos intuitivos e alertas que fazem toda a diferença no meu controle diário.',
		},
	];

	return (
		<section className="w-full bg-background py-20 px-6 md:px-16 lg:px-32">
			<div className="max-w-6xl mx-auto text-center mb-12">
				<h2 className="text-4xl font-bold text-text-primary">
					O que nossos usuários dizem
				</h2>
				<p className="mt-3 text-text-secondary max-w-2xl mx-auto">
					Feedback real de pessoas que transformaram sua vida financeira com o
					FinTrack.
				</p>
			</div>

			{/* CARDS */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all duration-200 flex flex-col gap-5"
					>
						<div className="flex justify-center">
							<FaUserCircle size={60} className="text-gray-400" />
						</div>

						<div className="flex justify-center text-yellow-400">
							{Array(5)
								.fill(0)
								.map((_, i) => (
									<LuStar key={i} size={20} fill="currentColor" />
								))}
						</div>

						<p className="text-text-secondary text-sm text-center">
							“{review.text}”
						</p>

						<div className="text-center">
							<h3 className="text-lg font-semibold text-text-primary">
								{review.name}
							</h3>
							<p className="text-text-secondary text-sm">{review.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Reviews;
