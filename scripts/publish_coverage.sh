echo """

  Publishing Coverage

"""
./node_modules/.bin/codecov --token="$CODECOV_TOKEN_JS_BIG_LIST"
