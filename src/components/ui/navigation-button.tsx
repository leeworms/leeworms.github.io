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
      const activeLink = document.querySelector('a.current-active-menu-link-tab') as HTMLAnchorElement;
      if (activeLink) {
        window.location.href = activeLink.href; // 해당 링크로 이동
      } else {
        window.history.back(); // 활성화된 링크가 없으면 뒤로 가기
      }
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
