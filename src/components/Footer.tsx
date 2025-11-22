import { LuInstagram, LuLinkedin, LuMail, LuTwitter } from 'react-icons/lu';

function Footer() {
	return (
		<footer className="w-full bg-accent text-white py-14 px-6 md:px-16 lg:px-32">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold tracking-wide">FinTrack</h2>
					<p className="text-white/80 text-sm max-w-xs">
						Simplificando o controle financeiro para você alcançar seus
						objetivos com inteligência e segurança.
					</p>
				</div>

				<div className="flex flex-col gap-3">
					<h3 className="text-lg font-semibold mb-1">Links</h3>
					<a
						href="@"
						className="text-white/80 text-sm hover:text-white transition"
					>
						Sobre
					</a>
					<a
						href="@"
						className="text-white/80 text-sm hover:text-white transition"
					>
						Contato
					</a>
					<a
						href="@"
						className="text-white/80 text-sm hover:text-white transition"
					>
						Política de Privacidade
					</a>
				</div>

				<div className="flex flex-col gap-3">
					<h3 className="text-lg font-semibold mb-1">Siga-nos</h3>
					<div className="flex gap-4 items-center">
						<a
							href="@"
							className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
						>
							<LuInstagram size={20} />
						</a>
						<a
							href="@"
							className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
						>
							<LuTwitter size={20} />
						</a>
						<a
							href="@"
							className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
						>
							<LuLinkedin size={20} />
						</a>
						<a
							href="mailto:contato@fintrack.com"
							className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
						>
							<LuMail size={20} />
						</a>
					</div>
				</div>
			</div>

			<div className="text-center text-white/70 text-sm mt-12">
				© 2025 FinTrack. Todos os direitos reservados.
			</div>
		</footer>
	);
}
export default Footer;
