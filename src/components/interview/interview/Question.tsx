import React, { useEffect, useState } from 'react';
import * as Q from './Question.style';
import Camera from './Camera';

function Question() {
    const questions = [
        '안녕하세요? 만나서 만갑습니다.',
        '먼저, 자기소개를 말해주세요.',
        '하하하1',
        '하하하2',
        '하하하3'
        // 추가 질문들
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0); // 타이머 시간
    const [timerLabel, setTimerLabel] = useState(''); // 타이머 레이블
    const [timerStage, setTimerStage] = useState(''); // 타이머 단계

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentQuestionIndex === 0) {
            // 첫 번째 질문에서 3초 후에 다음 질문으로 넘어감
            timeout = setTimeout(() => {
                setCurrentQuestionIndex(1);
                setTimerLabel('생각 시간:');
                setTimeLeft(30); // 30초 타이머
                setTimerStage('thinking');
            }, 3000);
        } else if (currentQuestionIndex >= 1 && currentQuestionIndex < questions.length - 1) {
            if (timerStage === 'thinking') {
                // 생각 시간 30초 타이머
                timeout = setTimeout(() => {
                    setTimerLabel('답변 시간:');
                    setTimeLeft(60); // 60초 타이머
                    setTimerStage('answering');
                }, 30000);
            } else if (timerStage === 'answering') {
                // 답변 시간 60초 타이머
                timeout = setTimeout(() => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setTimerLabel('생각 시간:');
                    setTimeLeft(30); // 다음 질문에 대한 초기 타이머 설정 (30초)
                    setTimerStage('thinking');
                }, 60000);
            }
        }

        // Countdown timer 설정
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : prevTime));
        }, 1000);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
        };

    }, [currentQuestionIndex, timerStage, questions.length]);

    return (
        <div>
            <Q.QContainer>
                <Q.QBox>{questions[currentQuestionIndex]}</Q.QBox>

                {/* 카메라 컴포넌트 */}
                <Camera />

                {/* 타이머 박스와 타이머 바 */}
                <div>{timerLabel} {timeLeft}s</div>
                <Q.TimerBox>
                    {timerLabel === '생각 시간:' && (
                        <Q.Timer30Bar style={{ animationDuration: '30s' }} />
                    )}
                    {timerLabel === '답변 시간:' && (
                        <Q.Timer60Bar style={{ animationDuration: '60s' }} />
                    )}
                </Q.TimerBox>
            </Q.QContainer>
        </div>
    );
}

export default Question;