import React, { useEffect, useState } from "react";
import { ReactJkMusicPlayerAudioListProps } from "react-jinke-music-player";
import Loading from "../components/Loading";
import { getCurrentUser } from "../services";

const App = React.createContext<{
  user?: any;
  setUser?: any;
  setLoading?: any;
  voiceSearch?: any; // chua can den
  setVoiceSearch?: any; // chua can den
  mediaList?: any; // Array<ReactJkMusicPlayerAudioListProps>,
  setMediaList?: any; // React.Dispatch<React.SetStateAction<ReactJkMusicPlayerAudioListProps[]>>
}>({});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [ready, setReady] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [voiceSearch, setVoiceSearch] = useState<boolean>(false);
  const [mediaList, setMediaList] = useState<any>([]);

  useEffect(() => {
    const load = async () => {
      // checking user:
      const { data } = await getCurrentUser();
      if (data) setUser(data);
    };
    load().finally(() => {
      setLoading(false);
      setReady(true);
    });
  }, []);

  return (
    <App.Provider
      value={{
        user,
        setUser,
        setLoading,
        voiceSearch,
        setVoiceSearch,
        mediaList,
        setMediaList,
      }}
    >
      {ready ? children : null}
      {loading ? <Loading /> : null}
    </App.Provider>
  );
}

export const useApp = () => React.useContext(App);
