# 정보 출처 목록 (SOURCES)

2026-11-11에 주소를 하나씩 실제로 열어 보고 정리했어요 (70곳). 자동 갱신 루틴이 새 소식을 찾을 때 이 목록을 먼저 봐요.

## 매주 볼 곳 (루틴이 먼저 여는 주소)
| 이름 | 주소 | 여기서 얻는 것 |
|---|---|---|
| GED 대전 선발 공고 | https://ged.kedi.re.kr/slct/noti/slctNotiStat.do?sidoDivCd=06 | 대전 영재교육원·영재학급 선발 공고 목록 (제목·기관까지만 읽힘) |
| 대전교육정보원 공지 | https://dei.djsch.kr/boardCnts/list.do?boardID=41490&m=0506&s=dei | 정보영재 선발, 수학축전, AI 대회 공고 |
| 대전수학문화관 | https://www.edurang.net/dmcc/main.do | 토요 가족 수학체험교실 기수 일정, 방학 캠프 |
| 대전학생교육문화원 강좌 | https://dsecc.djsch.kr/djsecc/lm/appl/lectList.do?mi=1115 | 초등 강좌 접수 기간과 정원 |
| 국립중앙과학관 교육 전체 | https://www.science.go.kr/mps/1092/allEduPrograms.do | 주말·방학 과학교실 접수 시작일 |
| 국립중앙과학관 개인 교육 게시판 | https://science.go.kr/mps/0/bbs/163/moveBbsNttList.do | 방학 과학교실 공지, 단기 교육 |
| 대전과학체험관 | https://desre.djsch.kr/des/exprn/selectExprnList.do?m=0512&s=des | 주말과학체험부스, 전시관 관람 신청 |
| 대전시립박물관 교육 | https://daejeon.go.kr/his/musEduInfoList.do | 시립·선사박물관 어린이 교육 접수 |
| 대전교육청 보도자료 | https://www.dje.go.kr/boardCnts/list.do?boardID=8&menuID=040201&m=040201&s=dje | 지역 신문 기사의 원문 |
| KMA 평가 일정 | https://www.kma-e.com/eval/schedule.asp | 시험일, 접수 기간, 응시료 |
| 한국사능력검정시험 | https://www.historyexam.go.kr/ | 회차별 일정 (기본 시험 회차 확인) |
| 사이언스올 과학문화 프로그램 | https://www.scienceall.com/brd/board/407/L/menu/293 | 대전·충청 과학 행사 |
| 교육부 보도자료 | https://www.moe.go.kr/boardCnts/listRenew.do?boardID=294&m=020402&s=moe | 입시·제도 변경 원문 |
| 충남대 과학영재교육원 공지 | https://gifted.cnu.ac.kr/gifted/community/notice.do | 선발 일정 |
| 베리타스알파 RSS | https://www.veritas-a.com/rss/allArticle.xml | 입시 기사 새 글 (검색 대신 RSS) |

## 쓸 때 주의할 점
- **첫 화면 주소는 빈 화면이 많아요.** 교육청·과학관 계열은 게시판 주소(`list.do?boardID=...`)를 직접 열어야 해요.
- **옛 주소가 바뀐 곳**: des.re.kr → desre.djsch.kr, dsecc.or.kr → dsecc.djsch.kr, kofac.re.kr → kosac.re.kr, koreapolyschool.com → poly-english.com, cmsedu.co.kr → creverse.com
- **글자가 깨지는 곳**(HME, KMC, 하늘교육 성대경시, 시매쓰): 날짜와 숫자만 읽혀요. "새 공지가 났다"는 신호로만 쓰고, 내용은 기사로 확인해요.
- **안 열리는 곳**: EBS 초등, 나이스 대국민, 학교알리미(글자 깨짐), TOEFL Junior 한국 사이트, 생각하는 황소, 유튜브(자막 없음), 대전교육청 학원 공지. 네이버 카페는 도구가 막혀 있어 쓰지 않아요.
- **학원 지점의 설명회·입학시험 일정은 공개 웹에 거의 없어요.** 필요한 학원은 직접 전화로 확인하는 게 빨라요.
- 오르비·디시·소마·브런치는 PC 쪽 망에서 막혀 확인하지 못했어요. 클라우드에서는 열릴 수도 있어요.

## 전체 목록

### 대전 공공
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| 대전광역시교육청 보도자료 | https://www.dje.go.kr/boardCnts/list.do?boardID=8&menuID=040201&m=040201&s=dje | 교육청·교육지원청의 학부모 특강, 영재·수학·과학 행사, 학원 점검 등 당일 보도자료 목록 | 열림 | 높음 | WebFetch 200, 정적 HTML 목록(제목·부서·날짜). RSS 버튼은 있으나 실제 주소 없음(#Rss). 루트(www.dje.go.kr)는 JS 리다이렉트라 빈 화면이므로 게시판 주소를 직접 써야 함 |
| 대전교육정보원 공지사항 | https://dei.djsch.kr/boardCnts/list.do?boardID=41490&m=0506&s=dei | 정보영재교육원 선발 전형, AI 창작 챌린지, 대전수학축전, 디지털 교육 행사 공지 | 열림 | 높음 | WebFetch 200, 정적 목록. 루트(dei.djsch.kr)는 '홈페이지 접속중입니다' JS 리다이렉트라 빈 화면 |
| 대전수학문화관 | https://www.edurang.net/dmcc/main.do | 토요 가족 수학체험교실 기수별 일정, 방학 융합수학체험캠프, 대전수학축전·수학체험전·수학탐구말하기대회 안내와 예약 | 열림 | 높음 | WebFetch 200. 공지 4건과 예약(/dmcc/ad/rv/selectResvePage.do?mi=41393)·수학축전(/dmcc/cm/cntnts/cntntsView.do?mi=42065&cntntsId=239523) 링크가 텍스트로 보임. 예약 자체는 로그인 필요할 수 있음 |
| 대전학생교육문화원 공지사항 | https://dsecc.djsch.kr/djsecc/na/ntt/selectNttList.do?mi=1154&bbsId=1006 | 월별 특강·그림책 놀이터·박물관 연계 프로그램 모집과 확정자 안내 | 열림 | 높음 | WebFetch 200, 정적 목록. 구 주소 www.dsecc.or.kr은 DNS 실패 |
| 대전학생교육문화원 강좌·행사 목록 | https://dsecc.djsch.kr/djsecc/lm/appl/lectList.do?mi=1115 | 강좌별 대상 학년, 운영일, 접수 기간, 정원·신청 현황 | 열림 | 높음 | WebFetch 200, 강좌 10건/쪽이 텍스트로 보임(신청은 로그인 필요) |
| 국립중앙과학관 전체 교육프로그램 | https://www.science.go.kr/mps/1092/allEduPrograms.do | 주말과학교실 등 교육 프로그램별 대상, 교육기간, 접수 시기, 상태 | 열림 | 높음 | WebFetch 200, 제목·대상·접수기간이 텍스트. 루트(www.science.go.kr)와 /mps는 JS 리다이렉트·404라 /mps/index.do 이하 주소를 써야 함 |
| 국립중앙과학관 행사 안내 | https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do | 과학마술콘서트, 별의별 과학특강, 탐사 프로그램 등 예정 행사와 날짜 | 열림 | 높음 | WebFetch 200, 행사명·기간·상태(행사예정) 텍스트 |
| GED 영재교육종합데이터베이스 선발공고(대전) | https://ged.kedi.re.kr/slct/noti/slctNotiStat.do?sidoDivCd=06 | 대전 소재 영재교육원·영재학급의 선발 공고 전체 목록(2027학년도 33건) | 열림 | 높음 | WebFetch 200. GET 파라미터 sidoDivCd=06(대전)이 먹혀 목록이 텍스트로 나옴. 10건/쪽, 공고 상세와 모집요강 파일은 JS 링크라 제목·기관까지만 수집 가능 |
| 대전광역시교육청 공지사항 | https://www.dje.go.kr/boardCnts/list.do?boardID=450&m=030101&s=dje | 교육청 본청 공지(공모전, 학부모 안내, 수능 등) | 열림 | 보통 | WebFetch 200, 정적 목록 |
| 대전광역시교육청 고시·공고 | https://www.dje.go.kr/boardCnts/list.do?boardID=451&m=030102&s=dje | 영재교육 대상자 선발 계획, 학원 교습비 조정기준 같은 공식 공고가 올라오는 게시판 | 열림 | 보통 | WebFetch 200, 정적 목록. 채용 공고가 대부분이라 제목 키워드(영재, 교습비, 선발)로 걸러야 함. 검색 폼은 POST라 목록 1~2쪽만 확인 가능 |
| 대전광역시교육청 교육·행사 게시판 | https://www.dje.go.kr/boardCnts/list.do?boardID=10679&m=041502&s=dje | 대전미래교육박람회, 특별강연 등 교육청 주관 행사 안내 | 열림 | 보통 | WebFetch 200, 글 수 적음(3건) |
| 대전교육정보원 정보영재교육원 공지 | https://dei.djsch.kr/boardCnts/list.do?boardID=109559&m=15030301&s=dei | 정보영재교육원 운영 공지(평가, 발표대회, 수료식) | 열림 | 보통 | WebFetch 200, 정적 목록 |
| 대전교육과학연구원 공지사항 | https://desre.djsch.kr/boardCnts/list.do?boardID=84981&m=1001&s=des | 과학대회(발명품경진, 청소년과학탐구대회, 창의력챔피언), 과학체험관, 발명교실 관련 공지 | 열림 | 보통 | WebFetch 200, 정적 목록. 루트는 JS 리다이렉트로 빈 화면. 최근 글은 교원 대상이 많음. 주말과학체험부스는 boardID=125477&m=050703 (WebFetch 200, 글 3건) |
| 한밭교육박물관 | https://www.hbem.or.kr | 교육 프로그램 신청, 상설체험(옛 교실), 공지 | 열림 | 보통 | WebFetch 200. 공지 /bbs/BBSMSTR_000000000141/list.do, 프로그램 /prog/education/kor/sub03_02_01/list.do 링크 확인(하위 페이지는 미시험) |
| 국립중앙과학관 공지사항 | https://www.science.go.kr/mps/1111/bbs/208/moveBbsNttList.do | 휴관, 이벤트, 특별전 공지 | 미확인 | 보통 | /mps/index.do에서 링크만 확인, 직접 시험은 안 함(같은 구조의 행사 게시판은 200). 통합예약 rsvn.science.go.kr/nsm/main도 미시험 |
| 대전시민천문대 공지사항 | https://djstar.kr/bbs/board.php?bo_table=web_notice | 관측실 운영 변경, 특별 프로그램 안내 | 열림 | 보통 | WebFetch 200, 그누보드 정적 목록(날짜에 연도 없음). 특별프로그램 예약 /theme/s007/index/spe_03.php는 링크만 확인 |
| 한밭도서관 문화행사 | https://www.daejeon.go.kr/hanbatlibrary/cultureEventList.do?menuSeq=6234 | 월간 달력 형태의 독서문화행사·강좌(인형극, 과학 놀이터 등) | 열림 | 보통 | WebFetch 200, 달력 텍스트(본문이 길어 뒤쪽 날짜는 잘림, 대상 연령은 상세 페이지에 있음). 공지는 /hanbatlibrary/board/boardNormalList.do?boardId=normal_1020&menuSeq=6234 |
| 대전 서구 공공도서관(둔산·갈마·월평·어린이도서관) | https://www.seogu.go.kr/learning/contents/study/main.jsp | 서구 도서관별 공지, 강좌 신청, 행사 | 열림 | 보통 | WebFetch 200. 단, 구청 루트(www.seogu.go.kr)는 WebFetch에서 ECONNREFUSED였으므로 이 하위 주소를 직접 써야 함. 서구 평생학습원 전용 수강신청 페이지는 찾지 못함(사이버평생학습관 /e-learning/index.asp만 확인, 미시험) |
| KAIST 과학영재교육연구원 공지 | https://gifted.kaist.ac.kr/main/board/list.action?q=7a9950041f6b1821be9e0ab1daa04d2a6b684c5677b2054d4999d7995cbb5fa0 | 주니어카이스트 수강생 모집, 수학 고도영재 프로그램, 과학 프런티어 선발 공지 | 열림 | 보통 | WebFetch 200, 정적 목록. 주소의 q 값이 토큰 형태라 바뀔 수 있으니 실패하면 루트(gifted.kaist.ac.kr)에서 다시 찾을 것 |
| 충남대학교 과학영재교육원 공지 | https://gifted.cnu.ac.kr/gifted/community/notice.do | 학생선발 안내, 과학고 탐방, 사사과정 행사 | 열림 | 보통 | WebFetch 200, 정적 목록. 실제 모집요강은 '학생선발' 메뉴에 별도(위치 미확인) |
| 대전광역시교육청 학원(교습소) 공지 | https://www.dje.go.kr/boardCnts/list.do?boardID=10402&m=031103&s=dje | 학원·교습소 관련 공지(교습비 조정기준 등) | 안 열림 | 낮음 | WebFetch HTTP 409 Conflict (2회 중 이 게시판과 boardID=22 모두 409). 브라우저 세션이 필요한 듯 |
| 대전공공도서관 통합 홈페이지 | https://www.u-library.kr/ | 대전 시립 도서관 통합 공지와 행사 목록(/event/list) | 일부 | 낮음 | WebFetch 200(메인). 공지 날짜가 뒤섞여 있고 /event/list는 미시험 |
| 유성구 평생학습센터 | https://lifelong.yuseong.go.kr/lly/index.do | 강좌 찾기·온라인 신청, 학습자 모집 공고 | 열림 | 낮음 | WebFetch 200. 강좌 목록 /lly/prog/lctr/lly/sub02_01/SEARCH/classList.do(미시험). 구 주소 www.yuseong.go.kr/lll/은 404 |
| 유성구 통합도서관 | https://lib.yuseong.go.kr/web/index.do | 유성 지역 도서관 공지와 문화강좌(/web/program/lectureList.do) | 열림 | 낮음 | WebFetch 200 |

### 전국 공식
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| 교육부 보도자료 | https://www.moe.go.kr/boardCnts/listRenew.do?boardID=294&m=020402&s=moe | 교육과정·평가·늘봄·사교육 대책 등 정책 원문 | 열림 | 높음 | WebFetch 200, 정적 목록. RSS 없음 |
| 사이언스올 전국의 과학문화 프로그램 | https://www.scienceall.com/brd/board/407/L/menu/293 | 전국 과학관·기관의 과학문화 행사(기간, 지역 표시) | 열림 | 높음 | WebFetch 200, 제목·기간·지역(대전·세종·충청) 텍스트. RSS 없음 |
| GED 공지사항 | https://ged.kedi.re.kr/opened/boardList.do?cate=N | 시도별 지원 일정·학교추천·오류 안내 | 일부 | 보통 | 메인(ged.kedi.re.kr)은 WebFetch 200으로 최근 공지 3건이 보이나 상세는 #fn_view JS. 이 목록 주소는 링크만 확인 |
| 한국사능력검정시험 | https://www.historyexam.go.kr/ | 다음 회차 시험일과 원서접수 기간 | 일부 | 보통 | WebFetch 200, 메인에 다음 회차(제81회 11/28)와 접수 일정이 텍스트로 나옴. 일정 페이지 링크는 javascript:void(0)이라 연간 일정표는 못 가져옴 |
| 한국과학창의재단(KOSAC) 공지사항 | https://www.kosac.re.kr/menus/270/boards/386/posts | 수학탐구대회, AI 페스티벌, 디지털새싹 등 재단 주관 행사·결과 공지 | 열림 | 보통 | WebFetch 200, 정적 목록. 구 주소 www.kofac.re.kr은 DNS 실패. 사업공고(/menus/274/bns)도 200이지만 기관 대상 |
| 학업성취도평가지원포털 | https://www.inaea.re.kr/ | 맞춤형 학업성취도 자율평가(초3부터) 안내와 결과표 제공 기간 | 열림 | 보통 | WebFetch 200, 공지 텍스트. 평가 참여·결과는 학교 계정 필요 |
| 대한민국 정책브리핑 보도자료 | https://www.korea.kr/briefing/pressReleaseList.do | 전 부처 보도자료 목록 | 일부 | 낮음 | WebFetch 200이지만 부처 필터가 폼 방식이고 RSS는 '서비스 제공 중단' 공지가 있음(korea.kr/rss/dept_moe.xml은 404) |
| 한국교육과정평가원 보도자료 | https://www.kice.re.kr/boardCnts/list.do?boardID=10024&m=050102&s=kice&searchStr= | TIMSS·학업성취도 분석, 교육데이터 리포트 | 열림 | 낮음 | WebFetch 200. 루트(www.kice.re.kr)는 기관명만 보이는 빈 화면 |
| 고입정보포털 | https://www.hischool.go.kr/ | 시도별 고입전형 기본계획, 학교별 입학전형요강 조회 | 열림 | 낮음 | WebFetch 200. 공지 /info/notice/index.do, 시도별 /entrance/sido/index.do 링크 확인 |
| 대입정보포털 어디가 | https://www.adiga.kr/man/inf/mainView.do | 대입 공지와 전형 자료 | 일부 | 낮음 | WebFetch 200, 공지 제목 3건만 보이고 대입뉴스는 JS로 비어 있음. 루트(www.adiga.kr)는 'Insert title here' 빈 화면 |
| 학교알리미 | https://www.schoolinfo.go.kr/Main.do | 학교별 공시 정보(학생 수, 방과후, 교육과정) | 일부 | 낮음 | WebFetch 200이지만 EUC-KR 인코딩이라 한글이 전부 깨짐. 루트도 같음. OpenAPI(/ng/go/pnnggo_a01_m0.do)는 SNS 로그인 후 인증키 필요 |
| 나이스 대국민서비스 | https://www.neis.go.kr/ | 학교정보, 학원·교습소 조회 등 | 안 열림 | 낮음 | WebFetch 200이지만 본문이 완전히 비어 있음(JS 앱) |
| EBS 초등 / 만점왕 | https://primary.ebs.co.kr/ | 초등 강좌와 만점왕 교재 정보 | 안 열림 | 낮음 | WebFetch HTTP 307(본문 없음). primary.ebs.co.kr/main/primary와 home.ebs.co.kr/manjumwang/main도 307. curl로는 200이라 쿠키·리다이렉트 처리 문제로 보임 |

### 대회
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| KMA 한국수학학력평가 평가 일정 | https://www.kma-e.com/eval/schedule.asp | 다음 시험일, 접수 기간, 대상 학년, 응시료 | 열림 | 높음 | WebFetch 200, 한글 정상. 2026 하반기: 11/21(토), 접수 8/1~10/31, 초1~중3, 40,000원으로 읽힘 |
| KMA 공지사항 | https://www.kma-e.com/board/board.asp?Hd_param=hp07001 | 시행 안내, 추가 접수, 고사장 배정, 영재 수학 캠프 | 열림 | 높음 | WebFetch 200, 한글 정상 |
| HME 해법수학 학력평가 시험 일정 | https://hme.chunjae.co.kr/hme/hme_info/hme_schedule.asp | 시험일, 개인·단체 접수 기간, 교시별 시간 | 일부 | 보통 | WebFetch 200이지만 EUC-KR이라 한글이 깨짐. 숫자·날짜는 읽힘(2026-11-14 시험, 개인 접수 9/1~11/11로 추정). 공지는 /hme/board/hme_notice.asp(미시험) |
| KMC 한국수학경시대회 공지 | https://www.kmath.co.kr/MN06/SM01/ | 회차별 시험 안내와 결과 발표 | 일부 | 보통 | WebFetch 200이지만 EUC-KR 깨짐. 글 번호·날짜·'53회 KMC' 정도만 읽힘 |
| 하늘교육 에듀스카이 공지(성대경시·KMC 접수처) | https://www.edusky.co.kr/comm/index2.asp?bdcode=11 | 성대경시(전국 영어·수학 학력경시대회)와 KMC 접수 안내 | 일부 | 보통 | WebFetch 200이지만 EUC-KR 깨짐, 날짜만 읽힘. 성대경시 전용 공식 주소는 검색으로 확인하지 못했고, 2021년 기사 기준 시행 주최가 종로학원 하늘교육이라는 것만 확인 |
| 한국수학올림피아드(KMO) 공지 | https://www.kmo.or.kr/board/list.html?code=kmo_notice01 | KMO 1·2차, KJMO 접수 기간과 개최 안내 | 열림 | 보통 | WebFetch 200, 한글 정상. 대한수학회(www.kms.or.kr)도 200 |
| TOEFL Junior / Primary 한국 사이트 | https://www.toefljunior.or.kr/ | 정기시험 일정과 접수 | 안 열림 | 낮음 | WebFetch ECONNREFUSED. www.toeflprimary.or.kr은 DNS 실패. 검색으로도 현재 한국 공식 일정 페이지를 찾지 못함(ets.org 한국어 페이지에는 시험 내용만 있고 일정 없음) |
| 에듀왕(왕수학) 본사 | https://www.eduwang.com/ | 왕수학 교재와 KMA 관련 공지 | 미확인 | 낮음 | curl 200(EUC-KR)만 확인, WebFetch 미시험. 'KSMC 왕수학 경시'라는 별도 공식 페이지는 찾지 못함. 왕수학 쪽 대회는 KMA(kma-e.com)로 연결됨 |

### 학원
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| 폴리어학원 캠퍼스 목록 | https://www.poly-english.com/aboutpoly/campusList.do | 전국 69개 캠퍼스 주소·전화(대전캠퍼스 만년동, 대전엠폴리 둔산동, 유성캠퍼스) | 열림 | 보통 | WebFetch 200. www.koreapolyschool.com은 poly-english.com으로 301, 루트는 /main.do로 302이므로 최종 주소를 직접 써야 함 |
| 대전폴리어학원 캠퍼스 페이지 | https://www.poly-english.com/campus/campusMain.do?searchClientCode=0601013 | 캠퍼스 공지, '학원 정보 및 교습비 안내' 메뉴 | 열림 | 보통 | WebFetch 200. 공지는 본사 공통 글 위주이고 설명회·입학테스트 일정은 보이지 않음. 대전엠폴리는 searchClientCode=1111002(200) |
| 크레버스(CMS영재교육센터·CMS영재관) | http://www.creverse.com/ | CMS 개강 소식, 체험수업·입학설명회 일정, 입학절차, KJMO·영재학교 실적 | 열림 | 보통 | WebFetch 200. www.cmsedu.co.kr은 JS→302로 여기로 넘어옴. 입학시험 예약은 스크립트 링크라 주소 없음. 학원찾기 /admission, 입학절차 /entrance/step |
| 시매쓰 공지 | https://cmath.co.kr/bbs/list.asp?pds_type=1&gbn=com | 학부모 설명회, 신규 과정·1학년 모집, 진단 안내 | 일부 | 보통 | WebFetch 200이지만 목록 페이지는 EUC-KR 깨짐(날짜만). 메인(cmath.co.kr)에서는 최근 공지 제목이 읽힘. www.cmath.co.kr은 인증서 불일치로 실패하므로 www 없이 써야 함 |
| 폴리어학원 본사 공지 | https://www.poly-english.com/cscenter/noticeList.do | 본사 공지 목록 | 미확인 | 낮음 | /main.do에서 링크와 최근 3건만 확인, 목록 페이지는 미시험 |
| 와이즈만 영재교육 | https://www.askwhy.co.kr/ | 과정 안내, 센터 찾기, 설명회 | 일부 | 낮음 | WebFetch 200이지만 본문이 잘려 SNS 링크만 확인됨. 추측한 하위 주소는 404. 센터·설명회 페이지 주소를 확인하지 못함 |
| 소마사고력수학 | http://www.soma.co.kr/ | 과정·센터·입학테스트 안내 | 미확인 | 낮음 | WebFetch 'Command failed'. 이 PC의 회사망 필터가 soma.co.kr을 '여가생활 기타'로 차단하고 있어 사이트 문제인지 판단 불가. 클라우드에서 다시 시험 필요 |
| 생각하는 황소(추정 주소) | https://www.hwangso.co.kr/ | 입학시험 일정 | 안 열림 | 낮음 | WebFetch HTTP 403. 이 주소가 황소 공식 사이트인지도 확인하지 못함. 검색 결과로는 공식 일정표가 없고, 2026-09 한국경제 기사에 시험 예약 사이트 해킹·임시 폐쇄 보도가 있음. 지점별 입학시험 공지는 오늘학교 아카데미(prompie)에 일부 노출 |

### 2차 자료
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| 오늘학교 아카데미 | https://academy.prompie.com/ | 전국 학원 16.9만 곳의 기본 정보·후기, 일부 학원의 입학시험 공지 | 열림 | 보통 | WebFetch 200. 지역·과목별 목록(/academies/list/by-region/...)이 검색 결과에 노출됨. 데이터 출처 표기는 확인 못 함, 교습비 표시 여부도 미확인 |
| 베리타스알파 전체기사 RSS | https://www.veritas-a.com/rss/allArticle.xml | 최신 기사 50건(제목·요약·날짜) | 열림 | 보통 | WebFetch 200, RSS 2.0. 대학 홍보 기사가 섞여 있어 키워드(영재학교, 과고, 초등) 필터 필요 |
| 에듀진 전체기사 RSS | https://www.edujin.co.kr/rss/allArticle.xml | 입시·학습법·교육정책 기사 50건 | 열림 | 보통 | WebFetch 200, RSS 2.0(요약은 앞부분만) |
| 브런치 | https://brunch.co.kr/ | 학부모·강사 개인 글 | 미확인 | 보통 | 이 PC에서는 WebFetch가 SSL WRONG_VERSION_NUMBER로 실패(회사망 필터가 가로채는 형태). 클라우드 루틴에서는 이미 쓰고 있으므로 거기서는 열리는 것으로 보임 |
| 대전일보 전체기사 RSS | https://www.daejonilbo.com/rss/allArticle.xml | 대전·충청 기사 50건 | 열림 | 낮음 | WebFetch 200, RSS 2.0. 전체기사만 있고 교육 섹션 피드는 확인 못 함. 50건이 몇 시간 분량이라 주 1회 수집으로는 대부분 놓침 |
| 충청투데이 전체기사 RSS | https://www.cctoday.co.kr/rss/allArticle.xml | 대전·충청 기사 50건 | 열림 | 낮음 | WebFetch 200, RSS 2.0. 대전일보와 같은 한계. 같은 형식의 ccdn.co.kr, eduinnews.co.kr, edupress.kr, news.unn.net 피드는 curl 200만 확인(WebFetch 미시험). hangyo.com/rss는 403, dhnews·joongdo는 404 |
| 내일교육 | https://www.naeiledu.co.kr/ | 교육 전문 주간지 기사 목록(중등·고등 위주) | 일부 | 낮음 | WebFetch 200, 기사 목록은 보이나 최신호 열람은 로그인(구독) 필요. 초등 섹션 없음 |
| 한경 생글생글 | https://sgsg.hankyung.com/ | 청소년 경제·논술 기사 | 열림 | 낮음 | WebFetch 200. 초등(주니어) 섹션 주소는 찾지 못함 |
| 교육부 공식 블로그(티스토리) RSS | https://if-blog.tistory.com/rss | 교육부 블로그 글 | 열림 | 낮음 | WebFetch 200이지만 2024-01-04 '채널 운영 종료' 이후 새 글 없음. 티스토리 RSS 자체는 잘 읽힌다는 확인용 |
| 오르비 | https://orbi.kr/ | 입시 커뮤니티(고등·N수 중심) | 미확인 | 낮음 | 이 PC 회사망이 '커뮤니티 기타'로 차단(SSL 오류). 클라우드에서 재시험 필요. 내용상 초등 정보는 거의 없음 |
| 디시인사이드 갤러리 | https://gall.dcinside.com/ | 익명 게시판(학원·입시 갤러리) | 미확인 | 낮음 | 이 PC 회사망이 '디시인사이드'로 차단. 갤러리 id는 확인하지 못했고(시험한 id는 임의 추정), 클라우드에서도 봇 차단 가능성이 있음 |
| 강남엄마 | https://www.gangmom.kr/ | 대치권 학원 설명회 일정·학원 정보 | 안 열림 | 낮음 | WebFetch HTTP 403(curl 브라우저 UA로는 200). 봇 차단 |
| 유튜브 채널(대전교육청 등) | https://www.youtube.com/feeds/videos.xml?channel_id=UCB3oeb01quVf7Fnlmtj9ifw | 채널 새 영상 제목·날짜 | 안 열림 | 낮음 | WebFetch HTTP 500(curl은 404), 채널 페이지(youtube.com/@...)도 404. 자막·요약은 WebFetch로 얻을 수 없음 |

### 데이터
| 이름 | 주소 | 얻는 것 | 열림 | 쓸모 | 메모 |
|---|---|---|---|---|---|
| 나이스 교육정보개방포털 학원교습소정보 API | https://open.neis.go.kr/hub/acaInsTiInfo?Type=json&pIndex=1&pSize=5&ATPT_OFCDC_SC_CODE=G10&ADMST_ZONE_NM=서구 | 대전(G10) 서구 학원·교습소 1,505곳의 이름, 주소, 분야·계열·과정, 정원, 등록상태, 교습비 필드(PSNBY_THCC_CNTNT) | 열림 | 높음 | WebFetch 200, 인증키 없이 JSON 반환(INFO-000). 키 없이는 한 번에 5건으로 시험했고 더 큰 pSize는 미시험. 처음 2건은 교습비 필드가 빈 값이었음. 주 1회 적재 |
| 나이스 교육정보개방포털 학원교습소정보 데이터셋 안내 | https://open.neis.go.kr/portal/data/service/selectServicePage.do?infId=OPEN19220231012134453534385&infSeq=1 | 데이터셋 설명, 제공 항목, 파일 내려받기(CSV·JSON) | 열림 | 보통 | WebFetch 200. 인증키 신청은 포털 로그인 필요(/portal/guide/actKeyPage.do) |
| 나이스 교육정보개방포털 학사일정 API | https://open.neis.go.kr/hub/SchoolSchedule?Type=json&pIndex=1&pSize=5&ATPT_OFCDC_SC_CODE=G10&AA_FROM_YMD=20261101&AA_TO_YMD=20261231 | 학교별 학사일정(방학, 재량휴업일, 행사) | 일부 | 보통 | WebFetch 200, JSON은 오지만 ERROR-300(필수 값 누락). 학교 코드(SD_SCHUL_CODE)를 넣어야 하는 것으로 보이며 학교 코드는 schoolInfo API로 찾아야 함(미시험) |
| 학교알리미 OpenAPI 안내 | https://www.schoolinfo.go.kr/ng/go/pnnggo_a01_m0.do | 학교 공시 데이터 API 이용 안내 | 일부 | 낮음 | WebFetch 200이지만 한글 깨짐. SNS 로그인 후 인증키 발급이 필요해 로그인 없는 루틴에는 맞지 않음 |
