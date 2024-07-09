import styled from "styled-components";
// lighten 함수를 사용하기 위해 필요한 import
import { lighten } from 'polished';

// 메인 컨테이너
export const MainContainer = styled.div`
    text-align:center;
    margin-top: 60px;
    font-weight: 600;
    font-size: 20px;
    line-height: 2.2;
`;

// 아이콘
export const MainIcon = styled.div`
    font-size: 90px;
`;

// 버튼 컨테이너
export const BtnContainer = styled.div` 
    margin-top: 30px;
`;

// 버튼
export const CompleteBtn = styled.div<{bg:string}>`
    display: flex;
    width: 350px;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bg};
    color: white;
    margin: 15px auto;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;

    transition: background-color 0.3s ease; /* 부드러운 전환 효과 추가 */

    &:hover {
        background-color: ${(props) => lighten(0.1, props.bg)}; /* 색상을 연하게 변경 */
    }
`;