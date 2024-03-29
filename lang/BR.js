//Variaveis, cada texto tem uma variavel
var home = "Página Inicial",
	services = "Serviços",
	portfolio = "Portfólio",
	about = "Nossa História",
	contact = "Contato",
	banner_1 = "Viva o novo",
	banner_msg_1 = "Relta Arquitetura",
	banner_2 = "Viva o novo",
	banner_msg_2 = "Relta Arquitetura",
	banner_3 = "Viva o novo",
	banner_msg_3 = "Relta Arquitetura",
	servico_titulo = "SERVIÇOS PRESTADOS",
	servico_msg = "Nossos profissionais são capacitados e possuem experiência tanto na área de reformas e construção quanto na área de Legislação, Certificações, Laudos e Gerenciamentos, trabalhando junto aos orgãos competentes de escala municipal à Federal, com o compromisso de satisfazer as necessidades dos nossos clientes e parceiros de maneira rápida e eficaz, sempre pensando na melhoria contínua através de ações preventivas e corretivas adequando todos os serviços e processos dentro dos padrões mais rigorosos de fiscalização e qualidade.",
	servico_1_titulo = "PREFEITURA",
	servico_1_desc = "Regularização;<br>Aprovação e Execução de Obras;<br>Aprovação e Execução de Reformas; <br>Licenças de Funcionamento;<br>Desdobros e Remembro de Lotes;<br>Projeto Acessibilidade;<br>Adaptação às Normas de Segurança;<br>Executivo/Construção Nova;<br>CADAN; <br>Tanques e Bombas;<br>Alvará de Equipamentos;<br>Auto de Verificação de Segurança (AVS);<br>Anistia.",
	servico_2_titulo = "PROJETOS TÉCNICOS",
	servico_2_desc = "Decoração e Interiores;<br>Paisagísmo;<br>Projetos Tridimensionais;<br>Comunicação de Pequena Reforma;<br>Laudo Para Condomínio (ABNT 16.280);<br>Laudo de Habitabilidade;<br>Laudo de Viabilidade;<br>As Built.",
	servico_3_titulo = "CORPO DE BOMBEIROS",
	servico_3_desc = "Adaptação às Normas do Corpo de Bombeiros;<br>Instalação de Equipamentos;<br>Pressurização de Escadas;<br>AVCB inicial;<br>Renovação;<br>Pré Vistoria;<br>FAT.",
	port_titulo = "PORTIFÓLIO",
	port_desc = "Conheça todos os nossos projetos.",
	parceiro_titulo = "Parceiros",
	parceiro_desc = "",
	sobre_titulo = "QUEM SOMOS",
	sobre_subtitulo = "Nossa História",
	sobre_msg = "Fundada por Felipe Alves e Raquel Freitas, a Relta Arquitutra desenvolve projetos em diálogo com a natureza e em contato com as devidas intenções, visando todas as necessidades de seus clientes. Felipe e Raquel trabalham juntos desde 2014, mas somente em 2016 ambos decidem fundar a sociedade empresarial.",
	missao_titulo = "MISSÃO",
	missao_desc = "Proporcionar soluções ambientais sustentáveis a seus clientes, parceiros e a sociedade, buscando desenvolvimento ambiental equilibrado e consciente.",
	visao_titulo = "VISÃO",
	visao_desc = "Ser uma empresa em referência nas soluções de consultoria, projetos e construções buscando atuar no mercado de forma transparente e ética.",
	valores_titulo = "VALORES",
	valores_desc = "Comprometimento, Foco, Objetividade, Praticidade, Sustentabilidade, Ética, Pontualidade, Transparência, Qualidade e Inovação.",
	equipe_titulo = "A EQUIPE",
	equipe_desc = "O escritório aposta em uma relação próxima com a natureza, em favor do conceito de verdadeira sustentabilidade. Projetos realizados que trabalham com materiais ecológicos, fazendo amplo uso de elementos como a luminosidade, a transparência, a fluidez dos espaços e a leveza estrutural. Por meio dessa proposta, estabelecendo um conceito de arquitetura brasileira, com a reapropriação do modernismo em diálogo com o meio ambiente.",
	equipe_p1_nome = "Felipe Alves",
	equipe_p1_cargo = "Arquiteto Fundador",
	equipe_p1_cv = "Ingressou no mercado em 2010, como estagiário em arquitetura, executando ao mesmo tempo projetos em freelance. Em 2011 passou a trabalhar com o arquiteto Roberto Montenegro onde adquiriu experiência com decorações e reformas, posteriormente em 2012 passou a estagiar na empresa Atthelie da Arquitetura, onde adquiriu experiência em Projetos de Aprovações, Cetesb, Covisa, Corpo de Bombeiros, Vigilância Sanitária, Acompanhamento e Gerenciamento de Obras. Em 2014, abriu a empresa como empresário individual, passando a atuar no mercado por conta própria.",
	equipe_p2_nome = "Raquel Toni",
	equipe_p2_cargo = "Co-Fundadora e Arquiteta",
	equipe_p2_cv = "Arquiteta atuante desde 2016, atuou como estagiária no Hospital Israelita Albert Einstein no ano de 2012 realizando projetos de interiores hospitalares, posteriormente no ano de 2013 ingressou como estagiária na empresa Atthelie da Arquitetura, executando análise de processos e projetos junto a Prefeituras. Prestou serviços em 2015 à empresa PW Design - Arquitetura e Interiores, realizando o desenvolvimento de projetos residenciais e comerciais, bem como as definições de mateirais e apresentação de projetos in loco. Além de ter iniciado sua profissão, com dois anos de participação na Prefeitura de São Paulo, para o cadastro fiscal e zoneamento da cidade."
		
//Funcao verifica e altera o valor do elemnto HTML
function validaID (id, valor){
	var element = !!document.querySelector(id)
	if(element){
		document.querySelector(id).innerHTML = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaMetaDados (id, nome, desc){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.dataset.title = nome
		el.dataset.description = desc
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaBtn (id, valor){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.value = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

//Atribui o valor da variavel no ID (html)
this.validaID('#menu-1', home);
this.validaID('#menu-2', services);
this.validaID('#menu-3', portfolio);
this.validaID('#menu-4', about);
this.validaID('#menu-5', contact);
this.validaID('#banner-1', banner_1);
this.validaID('#banner-2', banner_2);
this.validaID('#banner-3', banner_3);
this.validaID('#banner-msg-1', banner_msg_1);
this.validaID('#banner-msg-2', banner_msg_2);
this.validaID('#banner-msg-3', banner_msg_3);
this.validaID('#servico_titulo', servico_titulo);
this.validaID('#servico_msg', servico_msg);
this.validaID('#servico_1_titulo', servico_1_titulo);
this.validaID('#servico_1_desc', servico_1_desc);
this.validaID('#servico_2_titulo', servico_2_titulo);
this.validaID('#servico_2_desc', servico_2_desc);
this.validaID('#servico_3_titulo', servico_3_titulo);
this.validaID('#servico_3_desc', servico_3_desc);
this.validaID('#parceiro_titulo', parceiro_titulo);
this.validaID('#parceiro_desc', parceiro_desc);
this.validaID('#sobre_titulo', sobre_titulo);
this.validaID('#sobre_subtitulo', sobre_subtitulo);
this.validaID('#sobre_msg', sobre_msg);
this.validaID('#missao_titulo', missao_titulo);
this.validaID('#missao_desc', missao_desc);
this.validaID('#visao_titulo', visao_titulo);
this.validaID('#visao_desc', visao_desc);
this.validaID('#valores_titulo', valores_titulo);
this.validaID('#valores_desc', valores_desc);
this.validaID('#equipe_titulo', equipe_titulo);
this.validaID('#equipe_desc', equipe_desc);
this.validaID('#equipe_p1_nome', equipe_p1_nome);
this.validaID('#equipe_p1_cargo', equipe_p1_cargo);
this.validaID('#equipe_p1_cv', equipe_p1_cv);
this.validaID('#equipe_p2_nome', equipe_p2_nome);
this.validaID('#equipe_p2_cargo', equipe_p2_cargo);
this.validaID('#equipe_p2_cv', equipe_p2_cv);
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);

