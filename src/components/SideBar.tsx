import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface SideBarOptions {
  handleOnClick: (id: number) => void,
  genresOptions: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  selectedGenre: number;
}

export function SideBar({ handleOnClick, genresOptions, selectedGenre }: SideBarOptions) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genresOptions.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleOnClick(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}