import { Icon } from '@iconify/react';
import * as S from './style';


const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.DivSocialIcons>
                <Icon
                    onClick={() => window.open('https://github.com/vinivinci')}
                    style={{ cursor: "pointer" }}
                    width={30}
                    icon="mdi:github"
                />
                <Icon
                    onClick={() => window.open('https://www.linkedin.com/in/vinicius-andrade-6254721a4/')}
                    style={{ cursor: "pointer" }}
                    width={30}
                    icon="mdi:linkedin"
                />
            </S.DivSocialIcons>
            <p>&copy; {new Date().getFullYear()} VN soluções tech. Todos os direitos reservados.</p>
        </S.Footer>
    )
}
export default Footer;