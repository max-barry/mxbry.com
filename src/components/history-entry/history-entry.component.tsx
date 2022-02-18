import { scale } from "../../styles/text.styles";

interface Props {
  name: string;
}

export const HistoryEntry: React.FC<Props> = () => {
  return (
    <div style={{ fontFamily: "xxipmmvzcb", fontSize: scale(0).fontSize }}>
      History Entry
    </div>
  );
};
