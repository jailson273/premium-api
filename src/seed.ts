import connectionDatabase from "@connection-database";
import UserRuleSeed from "@seed/user-rule-seed";
import UserGroupSeed from "@seed/user-group-seed";

const seed = async () => {
    await connectionDatabase();
    await new UserRuleSeed().init();
    await new UserGroupSeed().init();
};
seed();
