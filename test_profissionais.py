import requests
import time

BASE_URL = "http://localhost:8000/profissionais"

# Teste POST: Criar Profissional
def test_criar_profissional():
    novo_profissional = {
        "id": "3",
        "nome": "Carlos",
        "email": "carlos@email.com",
        "ocupacao": "Fisioterapeuta",
        "ativo": True
    }

    response = requests.post(BASE_URL, json=novo_profissional)
    assert response.status_code == 201, f"Erro ao criar profissional: {response.text}"
    print("✅ Profissional criado com sucesso.")

# Teste GET: Listar Todos os Profissionais
def test_listar_profissionais():
    response = requests.get(BASE_URL)
    assert response.status_code == 200, f"Erro ao listar profissionais: {response.text}"
    profissionais = response.json()
    assert len(profissionais) > 0, "Nenhum profissional encontrado."
    print("✅ Profissionais listados com sucesso.")

# Teste GET: Buscar Profissional por ID
def test_buscar_profissional_por_id():
    response = requests.get(f"{BASE_URL}/3")
    assert response.status_code == 200, f"Erro ao buscar profissional por ID: {response.text}"
    profissional = response.json()
    assert profissional["id"] == "3", "ID do profissional não corresponde."
    print("✅ Profissional encontrado com sucesso pelo ID.")

# Teste PATCH: Atualizar Profissional
def test_atualizar_profissional():
    profissional_atualizado = {
        "nome": "Carlos Silva",  # Atualiza o nome
        "email": "carlos.silva@email.com"
    }

    response = requests.patch(f"{BASE_URL}/3", json=profissional_atualizado)
    assert response.status_code == 200, f"Erro ao atualizar profissional: {response.text}"
    
    # Verifica se a atualização foi realizada
    response = requests.get(f"{BASE_URL}/3")
    assert response.status_code == 200, f"Erro ao buscar profissional após atualização: {response.text}"
    profissional = response.json()
    assert profissional["nome"] == "Carlos Silva", "Nome do profissional não foi atualizado."
    print("✅ Profissional atualizado com sucesso.")

# Teste DELETE: Deletar Profissional
def test_remover_profissional():
    # Enviar DELETE para remover o profissional
    response = requests.delete(f"{BASE_URL}/3")
    print(f"Status code do DELETE: {response.status_code}")  
    print(f"Resposta do DELETE: {response.text}")  

    assert response.status_code == 200, f"Erro ao remover profissional: {response.text}"

    # Verificar que o profissional foi removido
    time.sleep(2)  

    response = requests.get(f"{BASE_URL}/3")
    print(f"Status code após remoção: {response.status_code}") 
    print(f"Resposta após remoção: {response.text}")  

    assert response.status_code == 200 and not response.text, f"Erro: Profissional ainda encontrado após remoção: {response.text}"

    print("✅ Profissional removido com sucesso.")

# Função de Execução dos Testes
def run_tests():
    test_criar_profissional()
    time.sleep(1)  
    test_listar_profissionais()
    time.sleep(1)
    test_buscar_profissional_por_id()
    time.sleep(1)
    test_atualizar_profissional()
    time.sleep(1)
    test_remover_profissional()

if __name__ == "__main__":
    run_tests()