 //가독성과 표준명명 관례를 고려하여, i 대신 props라고 표기한다.
        function Mall () {
            return <b>코엑스 몰 점</b>;
        };
            
        function Saturday({shop}) {
            return (
                <h3>친구들과 {shop} <Mall />에서 쇼핑도 하고 식사도 하며 즐거운 시간을 보냈습니다.</h3>
            );
        }
     
      

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Saturday shop='스타필드'/>);
