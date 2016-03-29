//
// Created by romanov on 1/23/16.
//
#include "catch.hpp"
#include "RCDB/SqLiteProvider.h"
#include <cstdlib>

using namespace rcdb;


TEST_CASE("General test of SqLite", "[sqlite]") {
    using namespace std;

    const char* env = std::getenv("RCDB_TEST_CONNECTION");
    if(!env) {
        FAIL("Environment variable RCDB_TEST_CONNECTION is not set");
    }


    if(string(env).find("sqlite://") == string::npos) {
        // The test only works with SQLite
        return;
    }

    string path(env);
    SqLiteProvider prov(path);

    auto cnd = prov.GetCondition(string("int_cnd"), 1);
    REQUIRE(cnd);
    REQUIRE(cnd->ToInt() == 5);


    cnd = prov.GetCondition(string("int_cnd"), 99999999999);
    REQUIRE_FALSE(cnd);


}
//
// Created by romanov on 1/23/16.
//

