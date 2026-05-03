import type React from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import AlertContainer from "../components/AlertContainer";
import { useCreateUser } from "../hooks/userHook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cadastrar() {
  const { handleCreateUser, loading, error } = useCreateUser();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleCreateUser({ nome, email, senha });

    setAlertVisible(true);

    if (!result?.error) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
    }
  };

  return (
    <div className="h-screen bg-zinc-800 flex flex-col justify-center items-center">
      {error ? (
        <AlertContainer
          error={true}
          message={error?.error.message || error.message}
          visible={alertVisible}
        />
      ) : (
        <AlertContainer
          error={false}
          message={"Cadastrado com sucesso!"}
          visible={alertVisible}
        />
      )}

      <div className="bg-white w-86 flex flex-col text-center shadow-lg shadow-sky-800/50 rounded-lg border border-sky-800">
        <h1 className="mt-3 text-2xl font-medium">CADASTRAR</h1>
        <form onSubmit={handleSubmit} className="p-3 flex flex-col gap-2">
          <Input
            label="Nome"
            required={true}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            required={true}
            onChange={(e) => setSenha(e.target.value)}
          />
          <SubmitButton text={loading ? "Cadastrando..." : "Cadastrar"} />
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;
