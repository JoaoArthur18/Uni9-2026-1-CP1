using Microsoft.AspNetCore.Mvc;
using Model_binding.Models;

namespace Model_binding.Controllers
{
    public class AlunoController : Controller
    {
        // guarda os alunos na memória enquanto o sistema estiver rodando
        private static readonly List<Aluno> _listaAlunos = new List<Aluno>();

        // GET: Aluno/Cadastrar
        [HttpGet]
        public IActionResult Cadastrar()
        {
            return View();
        }

        // POST: Aluno/Cadastrar
        [HttpPost]
        public IActionResult Cadastrar(Aluno aluno)
        {
            if (ModelState.IsValid)
            {
                // Adiciona o aluno digitado na nossa lista
                _listaAlunos.Add(aluno);
                
                TempData["Sucesso"] = "Aluno cadastrado com sucesso!";
                return RedirectToAction("Listar"); 
            }

            return View(aluno);
        }

        // GET: Aluno/Listar
        [HttpGet]
        public IActionResult Listar()
        {
            // Envia a lista de alunos para a tela de listagem
            return View(_listaAlunos);
        }
    }
}