#!/usr/bin/env bash
# 텔레그램으로 메시지 1개를 보냅니다.
# 사용법:  bash scripts/telegram.sh "보낼 내용"
# 필요한 환경 변수 (클라우드 환경 설정에 넣어 둠):
#   TELEGRAM_BOT_TOKEN  - BotFather가 준 토큰
#   TELEGRAM_CHAT_ID    - 받을 사람(나)의 chat id
# 둘 중 하나라도 없으면 아무것도 보내지 않고 조용히 끝납니다 (exit 0).
#
# 교육 수첩은 전용 봇을 씁니다: EDU_TELEGRAM_BOT_TOKEN (받는 사람이 다르면 EDU_TELEGRAM_CHAT_ID).
# 없으면 기존 TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID 로 보냅니다. 설정법: docs/TELEGRAM.md

set -u
TEXT="${1:-}"
TELEGRAM_BOT_TOKEN="${EDU_TELEGRAM_BOT_TOKEN:-${TELEGRAM_BOT_TOKEN:-}}"
TELEGRAM_CHAT_ID="${EDU_TELEGRAM_CHAT_ID:-${TELEGRAM_CHAT_ID:-}}"

if [ -z "${TELEGRAM_BOT_TOKEN:-}" ] || [ -z "${TELEGRAM_CHAT_ID:-}" ]; then
  echo "telegram: TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID가 없어 건너뜀"
  exit 0
fi
if [ -z "$TEXT" ]; then
  echo "telegram: 보낼 내용이 비어 있음"
  exit 1
fi

# 텔레그램 메시지 길이 제한(4096자)을 넘지 않게 자름
TEXT="$(printf '%s' "$TEXT" | head -c 4000)"

RESP="$(curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
  --data-urlencode "text=${TEXT}" \
  --data-urlencode "disable_web_page_preview=true")"

if printf '%s' "$RESP" | grep -q '"ok":true'; then
  echo "telegram: 전송 성공"
else
  echo "telegram: 전송 실패 → ${RESP}"
  exit 1
fi
