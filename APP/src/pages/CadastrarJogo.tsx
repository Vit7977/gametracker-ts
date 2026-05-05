import { useState } from "react";
import GenderContainer from "../components/GenderContainer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useCreateGame } from "../hooks/gameHooks";
import AlertContainer from "../components/AlertContainer";

function CadastrarJogo() {
  const { handleCreateGame, loading, error } = useCreateGame();
  const [alertVisible, setAlertVisible] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [capa, setCapa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataLanc, setDataLanc] = useState("");
  const [genero, setGenero] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState(0);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleCreateGame({
      titulo,
      capa,
      descricao,
      data_lancamento: dataLanc,
      genero,
      tempo_estimado: tempoEstimado,
    });

    setAlertVisible(true);

    if (!result?.error) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-row justify-center items-center gap-4">
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
      <div className="bg-white w-xl p-1 flex flex-col text-center shadow-lg shadow-sky-800/50 rounded-lg border border-sky-800">
        <h1 className="font-medium text-2xl mt-3">CADASTRAR JOGO</h1>
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-2">
          <Input
            label="Titulo"
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <Input
            label="Capa (URL)"
            onChange={(e) => setCapa(e.target.value)}
            required
          />
          <Input
            label="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input
            label="Data de Lançamento"
            type="date"
            onChange={(e) => setDataLanc(e.target.value)}
            required
          />
          <div>
            <Input
              label="Gêneros"
              onChange={(e) => setGenero(e.target.value)}
              required
            />
            <GenderContainer genders={genero} />
          </div>
          <Input
            label="Tempo para zerar (horas)"
            type="number"
            onChange={(e) => setTempoEstimado(Number(e.target.value))}
            min={0}
            max={999}
            required
          />
          <SubmitButton text={loading ? "Cadastrando..." : "Cadastrar"} />
        </form>
      </div>

      {capa.trim() ? (
        <div className="border border-white rounded-lg">
          <img
            src={capa}
            className="w-full object-cover aspect-[3/4] rounded-lg"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CadastrarJogo;
