pragma solidity ^0.4.17;

contract CampaignFactory {
    struct Campaigninfo {
        string title;
        string details;
        address campaignaddress;
    }
    Campaigninfo[] public deployedcampaigns;

    function createcampaign(uint minimum, string title, string details) public {
        address newcampaign = new Campaign(minimum, msg.sender, title, details);
        Campaigninfo memory newreq = Campaigninfo({
            title: title,
            details: details,
            campaignaddress: newcampaign
        });
        deployedcampaigns.push(newreq);
    }

    function numofdeployedcampaigns() public view returns (uint) {
        //view means no data can be modified inside this function
        return deployedcampaigns.length;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalcount;
        mapping(address => bool) approvals;
    }

    string public title;
    string public details;
    Request[] public requests;
    address public manager;
    uint public minimum_contribution;
    mapping(address => bool) public approvers;
    uint public approvercount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(
        uint minimum,
        address creator,
        string title_,
        string details_
    ) public {
        title = title_;
        details = details_;
        manager = creator;
        minimum_contribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimum_contribution && msg.sender != manager);
        if (approvers[msg.sender] == false) {
            approvers[msg.sender] = true;
            approvercount++;
        }
    }

    function createrequest(
        string description,
        uint value,
        address recipient
    ) public restricted {
        Request memory newreq = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalcount: 0
        });
        requests.push(newreq);
    }

    function approverequest(uint ind) public {
        Request storage req = requests[ind];
        require(approvers[msg.sender] && !req.approvals[msg.sender]);
        req.approvals[msg.sender] = true;
        req.approvalcount++;
    }

    function finalizerequest(uint ind) public restricted {
        Request storage req = requests[ind];
        require(!req.complete && req.approvalcount > approvercount / 2);
        req.recipient.transfer(req.value);
        req.complete = true;
    }

    function getsummary()
        public
        view
        returns (uint, uint, uint, uint, address, string, string)
    {
        return (
            minimum_contribution,
            this.balance,
            requests.length,
            approvercount,
            manager,
            title,
            details
        );
    }

    function getrequestcount() public view returns (uint) {
        return requests.length;
    }
}
