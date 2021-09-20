import { Button } from '../components/Button';
import { GenreResponseProps } from '../App'
interface SideBarProps {
  genres: Array<GenreResponseProps>
  handleClick: any;
  selectedGenre: number;
}

export function SideBar({ genres, handleClick, selectedGenre }: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}