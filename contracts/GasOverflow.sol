pragma solidity ^0.5.10;

import {IERC20} from "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract GasOverflow {

    IERC20 DAI = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);

    uint256 previousGasLimit;
    uint256 constant REWARD = 1000 * 10 ** 18; // 1000 DAI

    constructor(uint256 amount) public payable {
        DAI.transferFrom(msg.sender, address(this), amount);
    }

    function _canClaim() private view returns (bool) {
        uint256 _plusFivePercent = previousGasLimit + (previousGasLimit / 20);
        return block.gaslimit > _plusFivePercent;
    }

    function _claim() private returns (bool) {
        previousGasLimit = block.gaslimit;
        DAI.transfer(block.coinbase, REWARD);
        return true;
    }

    function claim() public returns (bool) {
        if (_canClaim()) {
            _claim();
            return true;
        }
        return false;
    }
}
