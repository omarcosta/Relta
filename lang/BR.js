//Variaveis, cada texto tem uma variavel
var home = "Página Inicial",
	services = "Serviços",
	portfolio = "Portfólio",
	about = "Sobre Nós",
	contact = "Contato",
	banner_1 = "teste",
	banner_msg_1 = "teste",
	banner_2 = "",
	banner_msg_2 = "",
	banner_3 = "",
	banner_msg_3 = "",
	servico_titulo = "SERVIÇOS PRESTADOS",
	servico_msg = "Nossos profissionais são capacitados e possuem experiência tanto na área de reformas e construção quanto na área de Legislação, Certificações, Laudos e Gerenciamentos, trabalhando junto aos orgãos competentes de escala municipal à Federal, com o compromisso de satisfazer as necessidades dos nossos clientes e parceiros de maneira rápida e eficaz, sempre pensando na melhoria contínua através de ações preventivas e corretivas adequando todos os serviços e processos dentro dos padrões mais rigorosos de fiscalização e qualidade.",
	servico_1_titulo = "PREFEITURA",
	servico_1_desc = "Regularização;<br>Aprovação e Execução de Obras;<br>Aprovação e Execução de Reformas; <br>Licenças de Funcionamento;<br>Desdobros e Remembro de Lotes;<br>Projeto Acessibilidade;<br>Adaptação às Normas de Segurança;<br>Executivo/Construção Nova;<br>CADAN; <br>Tanques e Bombas;<br>Alvará de Equipamentos;<br>Auto de Verificação de Segurança (AVS).",
	servico_2_titulo = "PROJETOS TÉCNICOS",
	servico_2_desc = "Decoração e Interiores;<br>Paisagísmo;<br>Projetos Tridimensionais;<br>Comunicação de Pequena Reforma;<br>Laudo Para Condomínio (ABNT 16.280);<br>Laudo de Habitabilidade;<br>Laudo de Viabilidade;<br>As Built.",
	servico_3_titulo = "CORPO DE BOMBEIROS",
	servico_3_desc = "Adaptação às Normas do Corpo de Bombeiros;<br>Instalação de Equipamentos;<br>Pressurização de Escadas;<br>AVCB inicial;<br>Renovação;<br>Pré Vistoria;<br>FAT.",
	port_titulo = "PORTIFÓLIO",
	port_desc = "Conheça todos os nossos projetos.",
	port_op_1 = "Casa GP",
	port_op_2 = "Casa Verde",
	port_op_3 = "CCSP",
	port_op_4 = "Guarulhos",
	port_op_5 = "Vl. Madalena",
	port_op_6 = "ESV",
	port_op_1_desc = "Descricao da Obra.",
	port_op_2_desc = "Descricao da Obra.",
	port_op_3_desc = "Descricao da Obra.",
	port_op_4_desc = "Descricao da Obra.",
	port_op_5_desc = "Descricao da Obra.",
	port_op_6_desc = "Descricao da Obra.",
	port_pergunta = "VOCÊ GOSTOU DO NOSSO PORTIFÓLIO?",
	port_resposta = "Entre em contato agora mesmo e ficaremos satisfeitos em lhe atender.",
	btn_contato = "ENTRE EM CONTATO CONOSCO",
	sobre_titulo = "QUEM SOMOS",
	sobre_subtitulo = "SOBRE NÓS",
	sobre_msg = "Fundada por Felipe Alves e Raquel Freitas, a Relta Arquitutra desenvolve projetos em diálogo com a natureza e em contato com as devidas intenções, visando todas as necessidades de seus clientes. Felipe e Raquel trabalham juntos desde 2014, mas somente em 2016 ambos decidem fundar a sociedade empresarial.",
	missao_titulo = "MISSÃO",
	missao_desc = "Proporcionar soluções ambientais sustentáveis a seus clientes, parceiros e a sociedade, buscando desenvolvimento ambiental equilibrado e consciente.",
	visao_titulo = "VISÃO",
	visao_desc = "Ser uma empresa referência em soluções de consultoria, projetos e construções buscando atuar no mercado de forma transparente e ética.",
	valores_titulo = "VALORES",
	valores_desc = "Comprometimento, Foco, Objetividade, Praticidade, Sustentabilidade, Ética, Pontualidade, Transparência, Qualidade e Inovação.",
	equipe_titulo = "A EQUIPE",
	equipe_desc = "O escritório aposta em uma relação próxima com a natureza, em favor do conceito de verdadeira sustentabilidade. Projetos realizados que trabalham com materiais ecológicos, fazendo amplo uso de elementos como a luminosidade, a transparência, a fluidez dos espaços e a leveza estrutural. Por meio dessa proposta, estabelecendo um conceito de arquitetura brasileira, com a reapropriação do modernismo em diálogo com o meio ambiente.",
	equipe_p1_nome = "Felipe Alves",
	equipe_p1_cargo = "Fundador e CEO",
	equipe_p1_cv = "Ingressou no mercado em 2010, como estagiário em arquitetura, executando ao mesmo tempo projetos em freelance. Em 2011 passou a trabalhar com o arquiteto Roberto Montenegro onde adquiriu experiência com decorações e reformas, posteriormente em 2012 passou a estagiar na empresa Atthelie da Arquitetura, onde adquiriu experiência em Projetos de Aprovações, Cetesb, Covisa, Corpo de Bombeiros, Vigilância Sanitária, Acompanhamento e Gerenciamento de Obras. Em 2014, abriu a empresa como empresário individual, passando a atuar no mercado por conta própria.",
	equipe_p2_nome = "Raquel Toni",
	equipe_p2_cargo = "Co-Fundadora e Arquiteta",
	equipe_p2_cv = "Arquiteta atuante desde 2016, atuou como estagiária no Hospital Israelita Albert Einstein no ano de 2012 realizando projetos de interiores hospitalares, posteriormente no ano de 2013 ingressou como estagiária na empresa Atthelie da Arquitetura, executando análise de processos e projetos junto a Prefeituras. Prestou serviços em 2015 à empresa PW Design - Arquitetura e Interiores, realizando o desenvolvimento de projetos residenciais e comerciais, bem como as definições de mateirais e apresentação de projetos in loco. Além de ter iniciado sua profissão, com dois anos de participação na Prefeitura de São Paulo, para o cadastro fiscal e zoneamento da cidade.",
	equipe_p3_nome = "Beto Montenegro",
	equipe_p3_cargo = "Arquiteto",
	equipe_p3_cv = "Arquiteto atuante, com experiência na área de projeto de arquitetura. Formado pela Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo (FAUUSP, 1998), Mestre (2007) e Doutor (2012) pela mesma Instituição em História da Arquitetura e do Urbanismo, com pesquisa desenvolvida sobre a pré-fabricação na arquitetura moderna. Professor na Universidade São Francisco (Campus Itatiba e Bragança) em disciplinas de TCC, projeto de arquitetura (residencial, institucional, cultural e de lazer), e teoria.",
	contato_titulo = "COMO NOS ENCONTRAR",
	contato_subtitulo = "CONTATO",
	contato_email_titulo = "E-mail",
	contato_email = "contato@relta.com.br",
	contato_tel_titulo = "TELEFONES",
	contato_tel = "(11) 93234-2354 / (11) 2365-8439",
	form_titulo = "ENVIE UMA MENSAGEM",
	form_desc = "Deixe seus contatos e uma prévia de sua necessidade que retornaremos o contato.",
	form_subtitulo = "FORMULÁRIO DE CONTATO",
	form_nome = "Nome:",
	form_email = "E-mail:",
	form_tel = "Telefone:",
	form_msg = "Mensagem:",
	form_btn = "Enviar",
	copyright = "©Copyright <a href='http://www.relta.com.br/'>Relta.com</a> 2014 All rights reserved <br/> By: <a href='https://www.linkedin.com/in/omarcosta152'>Omar Costa";
	
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
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);
this.validaID('#port_op_1', port_op_1);
this.validaID('#port_op_2', port_op_2);
this.validaID('#port_op_3', port_op_3);
this.validaID('#port_op_4', port_op_4);
this.validaID('#port_op_5', port_op_5);
this.validaID('#port_op_6', port_op_6);
this.validaID('#port_op_1_desc', port_op_1_desc);
this.validaID('#port_op_2_desc', port_op_2_desc);
this.validaID('#port_op_3_desc', port_op_3_desc);
this.validaID('#port_op_4_desc', port_op_4_desc);
this.validaID('#port_op_5_desc', port_op_5_desc);
this.validaID('#port_op_6_desc', port_op_6_desc);
this.validaID('#port_pergunta', port_pergunta);
this.validaID('#port_resposta', port_resposta);
this.validaID('#btn_contato', btn_contato);
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
this.validaID('#equipe_p2_nome', equipe_p2_nome);
this.validaID('#equipe_p2_cargo', equipe_p2_cargo);
this.validaID('#equipe_p3_nome', equipe_p3_nome);
this.validaID('#equipe_p3_cargo', equipe_p3_cargo);
this.validaID('#contato_titulo', contato_titulo);
this.validaID('#contato_subtitulo', contato_subtitulo);
this.validaID('#contato_email_titulo', contato_email_titulo);
this.validaID('#contato_email', contato_email);
this.validaID('#contato_tel_titulo', contato_tel_titulo);
this.validaID('#contato_tel', contato_tel);
this.validaID('#form_titulo', form_titulo);
this.validaID('#form_desc', form_desc);
this.validaID('#form_subtitulo', form_subtitulo);
this.validaID('#form_nome', form_nome);
this.validaID('#form_email', form_email);
this.validaID('#form_tel', form_tel);
this.validaID('#form_msg', form_msg);
this.validaID('#copyright', copyright);
this.validaBtn('#form_btn', form_btn);
this.validaMetaDados('#equipe_p1', equipe_p1_nome, equipe_p1_cv);
this.validaMetaDados('#equipe_p2', equipe_p2_nome, equipe_p2_cv);
this.validaMetaDados('#equipe_p3', equipe_p3_nome, equipe_p3_cv);