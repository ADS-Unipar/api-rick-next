import CharacterDetail, { CharacterProps } from "@/components/CharacterDetail";
import api from "@/utils/api";

async function Personagem({ params }: { params: { id: string } }) {
  const { data } = await api.get(`character/${params.id}`); 
  
  return <CharacterDetail {...data as CharacterProps} />;


}

export default Personagem;