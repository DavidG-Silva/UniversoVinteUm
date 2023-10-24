

INSERT INTO tipos_vagas
(descricao)
VALUES
('Atendimento'),
('Tecnologia'),
('Escritório');

INSERT INTO localidades_vagas
(cidade, estado)
VALUES
('São Paulo', 'SP'),
('Curitiba', 'PR'),
('Belo Horizonte', 'MG');

INSERT INTO parceiros_vagas
(nome, contato)
VALUES
('RH Nossa', 'rhnossa@email.com'),
('Operativa', 'operativa@email.com');

INSERT INTO links_vagas
(endereco, id_parceiros)
VALUES
('linkvaga01rhnossa.com.br', 1),
('linkvaga01operativa.com.br', 2),
('linkvaga02rhnossa.com.br', 1),
('linkvaga02operativa.com.br', 2);

INSERT INTO vagas
(titulo, descricao, id_tipos, id_localidades, id_links, id_parceiros)
VALUES
('Vaga 01 atendimento SP', 'Atender telefone, Atender pacientes', 1, 1, 1, 1),
('Vaga 02 escritorio Ctba', 'Rotinas de escritório', 3, 2, 2, 2),
('Vaga 03 tecnologia BH', 'Suporte tecnico', 2, 3, 3, 1),
('Vaga 04 atendimento BH', 'Atender telefone, Atender pacientes', 1, 3, 4, 2);

