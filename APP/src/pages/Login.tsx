import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import AlertContainer from "../components/AlertContainer";
import React, { useState } from "react";
import { useLogin } from "../hooks/userHook";

function Login() {
  const { handleLogin, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleLogin(email, senha);
    setAlertVisible(true);

    if (!result?.error && result.data != null) {
      localStorage.setItem("token", result.data);
      setTimeout(() => {
        return navigate("/home");
      }, 1000);
    } else {
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col justify-center items-center">
      {error ? (
        <AlertContainer
          error={true}
          message={error.error?.message ?? error.message}
          visible={alertVisible}
        />
      ) : (
        <AlertContainer
          error={false}
          message="Login efetuado com sucesso!"
          visible={alertVisible}
        />
      )}
      <div className="bg-white p-2 w-86 flex flex-col text-center shadow-lg shadow-sky-800/50 rounded-lg border border-sky-800">
        <h1 className="mt-3 text-2xl font-medium">LOGIN</h1>

        <form className="p-3 flex flex-col gap-2" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Senha"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <SubmitButton text={loading ? "Logando..." : "Login"} />
        </form>

        <div className="p-2 flex items-center justify-center gap-1">
          <p className="">Ainda não tem uma conta?</p>
          <Link
            className="text-sky-700 hover:underline hover:text-sky-900"
            to={"/cadastrar"}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
