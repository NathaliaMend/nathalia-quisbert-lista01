let turmas = [
    {
        nomeProfessor: "Murilo",
        alunos: [
            {
                nome: "Vitória",
                nota: 10
            },
            {
                nome: "Carlos",
                nota: 5
            },
            {
                nome: "Nathalia",
                nota: 9
            },
            {
                nome: "Nathalia2",
                nota: 9
            },
            {
                nome: "Leticia",
                nota: 9
            }
        ]
    },
    {
        nomeProfessor: "João",
        alunos: [
            {
                nome: "Maria",
                nota: 8.5
            },
            {
                nome: "Pedro",
                nota: 6
            },
            {
                nome: "Ana",
                nota: 7
            },
            {
                nome: "gabriel",
                nota: 7
            }
        ]
    }
];

// Divindo
// Ordernar por nota
// Ir turma a turma

function ordenarAlunosPorNota(alunos) {
    let i = 0;
    while (i < alunos.length - 1) {
        if (alunos[i].nota > alunos[i + 1].nota) {
            let auxiliar = alunos[i];
            alunos[i] = alunos[i + 1];
            alunos[i + 1] = auxiliar;
            i = 0;
        } else {
            i++;
        }
    }
    return alunos;
}

// método que ordene os alunos de cada turma em ordem crescente de nota
function ordem(turmas) {
    let i = 0;
    while (i < turmas.length) {
        // console.log(turmas[i]) // <----
        // dentro = o que
        let alunos = turmas[i].alunos;
        let alunosOrdenados = ordenarAlunosPorNota(alunos);
        turmas[i].alunos = alunosOrdenados;
        i++;
    }
    return turmas;
}
const turmaEAlunosOrdenados = ordem(turmas);


// "Parabéns <nome_aluno> , você foi aprovado com a nota X" caso a nota seja >= 7
// "Não foi dessa vez <nome_aluno>, você reprovou com a nota X" caso a nota seja <7

function avaliarAlunos(alunos, turma) {
    let i = 0;
    while (i < alunos.length) {
        const nota = alunos[i].nota;
        const aluno = alunos[i].nome;

        if (nota >= 7) {
            console.log(`Parabéns ${aluno} da turma ${turma}, você foi aprovado com a nota ${nota}`);
        }
        if (nota < 7) {
            console.log(`Nao foi dessa vez ${aluno} da turma ${turma}, você reprovou com a nota ${nota}`);
        }
        i++;
    }
}

function avaliarTurma(turmas) {
    let i = 0;
    while (i < turmas.length) {
        avaliarAlunos(turmas[i].alunos, i);
        i++;
    }
}
avaliarTurma(turmas);
