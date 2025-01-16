import { Button } from '~/components/ui/button';
import { HomeIcon, UndoIcon } from '~/components/ui/icons';

export default function NavigationButton({
  iconType = 'home',
}: {
  iconType?: 'home' | 'back' | 'none';
}) {
  const onClick = () => {
    if (iconType === 'home') {
      window.location.href = '/'; // 홈으로 이동
    } else if (iconType === 'back') {
      window.history.back(); // 뒤로 가기
    }
  };

  if (iconType === 'none') {
    return <div className={'h-9 w-9'}></div>
  }

  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      {iconType === 'home' && <HomeIcon className="h-5 w-5" />}
      {iconType === 'back' && <UndoIcon className="h-5 w-5" />}
    </Button>
  );
}
