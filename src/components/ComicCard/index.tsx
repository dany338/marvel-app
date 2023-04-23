import { Container } from "./styled";
import { IThumbnail } from "../../entities/character";
import { getUrlImage } from "../../utils/getUrlImage";
import { MARVEL_IMAGE_PORTRAIT_FANTASTIC } from "../../constants/api";

type Props = {
  id: number;
  title: string;
  thumbnail: IThumbnail;
  onClick: () => void;
};

const ComicCard: React.FC<Props> = ({
  id,
  title,
  thumbnail : {
    path,
    extension
  },
  onClick
}) => {
  return (
    <Container onClick={() => onClick()}>
      <img src={getUrlImage(path, extension, MARVEL_IMAGE_PORTRAIT_FANTASTIC)} alt={title} />
    </Container>
  );
}

export default ComicCard;