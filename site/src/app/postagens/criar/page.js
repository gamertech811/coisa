import FormularioPostagem from "@/components/form";
import "@/components/styles/body.css";

export default function Home() {
  return (
    <div id="cor">
      <h1 className="titpost">Criar Postagem</h1>
      <FormularioPostagem />
    </div>
  );
}
