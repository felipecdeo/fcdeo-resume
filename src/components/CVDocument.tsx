// @ts-ignore
import jsPDF from 'jspdf';

export type CVData = {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	github: string;
	linkedin: string;
	about: string[];
	experiences: Array<{
		title: string;
		company: string;
		period: string;
		description: string;
		technologies: string[];
	}>;
	education: string[];
	skills: string[];
	frameworks: string[];
	tools: string[];
};

export async function generateAndDownloadCVPDF(cv: CVData) {
	const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
	let y = 40;
	pdf.setFontSize(22);
	pdf.text(cv.name, 40, y);
	y += 28;
	pdf.setFontSize(16);
	pdf.text(cv.title, 40, y);
	y += 24;
	pdf.setFontSize(12);
	pdf.text(`Email: ${cv.email} | Tel: ${cv.phone}`, 40, y);
	y += 18;
	pdf.text(`Localização: ${cv.location}`, 40, y);
	y += 18;
	pdf.text(`GitHub: ${cv.github} | LinkedIn: ${cv.linkedin}`, 40, y);
	y += 24;
	pdf.setFontSize(14);
	pdf.text('Sobre', 40, y);
	y += 18;
	pdf.setFontSize(12);
	cv.about.forEach((p) => {
		pdf.text(p, 40, y);
		y += 16;
	});
	y += 10;
	pdf.setFontSize(14);
	pdf.text('Experiência', 40, y);
	y += 18;
	pdf.setFontSize(12);
	cv.experiences.forEach((exp) => {
		pdf.text(`${exp.title} - ${exp.company} (${exp.period})`, 40, y);
		y += 14;
		pdf.text(exp.description, 48, y);
		y += 14;
		pdf.text('Tecnologias: ' + exp.technologies.join(', '), 48, y);
		y += 18;
	});
	y += 10;
	pdf.setFontSize(14);
	pdf.text('Educação', 40, y);
	y += 18;
	pdf.setFontSize(12);
	cv.education.forEach((edu) => {
		pdf.text(edu, 40, y);
		y += 16;
	});
	y += 10;
	pdf.setFontSize(14);
	pdf.text('Skills', 40, y);
	y += 18;
	pdf.setFontSize(12);
	pdf.text(cv.skills.join(', '), 40, y);
	y += 18;
	pdf.setFontSize(14);
	pdf.text('Frameworks', 40, y);
	y += 18;
	pdf.setFontSize(12);
	pdf.text(cv.frameworks.join(', '), 40, y);
	y += 18;
	pdf.setFontSize(14);
	pdf.text('Ferramentas', 40, y);
	y += 18;
	pdf.setFontSize(12);
	pdf.text(cv.tools.join(', '), 40, y);
	pdf.save('cv.pdf');
}
