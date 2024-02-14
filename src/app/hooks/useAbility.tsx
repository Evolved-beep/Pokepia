import { useState, useEffect } from "react";

interface IUrl {
  url:string
}

const useAbility = ({url}:IUrl) => {
    const [allAbility, setAllAbilities] = useState<Array<any>>([])
    const [nextUrl,setNextUrl] = useState<string>("")

    useEffect(() => {
        const fetchAllAbility = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setNextUrl(data.next)
          const ability:any = [];
          data.results.forEach((abili: {url:string}) => ability.push(fetchOneAbility(abili.url)));
          Promise.all(ability).then((result) => {
            setAllAbilities(state => [...state, ...result]);
          });
        };
        fetchAllAbility();
    
        const fetchOneAbility = async(url:string) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        };
      }, [url]);
      return {allAbility, nextUrl}
}

export default useAbility