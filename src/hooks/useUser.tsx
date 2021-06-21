import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, Usuario } from "../interfaces/reqRes";

export const useUser = () => {
  const [user, setUser] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);
  const [paginaTotal, setPaginaTotal] = useState<number>(0);

  const getUser = async () => {
    reqResApi.get<ReqResList>('/users', { params: { page: paginaRef.current } }).then(resp => {
      setUser(resp.data.data);
      setPaginaTotal(resp.data.total_pages);
    }).catch(console.log)
  }

  useEffect(() => {
    // llamar api
    getUser()
  }, [])

  const paginaSiguiente = () => {
    if (paginaRef.current < paginaTotal) {
      paginaRef.current++;
      getUser();
    } else {
      alert('Ya no hay mas paginas')
    }
  }

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      getUser();
    } else {
      alert('Te encuentras en la pagina 1')
    }
  }

  return { user, paginaSiguiente, paginaAnterior }
}
