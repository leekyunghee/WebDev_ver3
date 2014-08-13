package team.idess.web.service.account;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.idess.web.bean.account.AccountBean;
import team.idess.web.mapper.account.AccountMapper;

/**
 *사용자 관련 서비스
 *@version 1.0
 *@author jrkang
 */
@Service
public class AccountServiceImpl implements AccountService {
	
	private static final Logger logger = LoggerFactory.getLogger(AccountServiceImpl.class);
	
	@Autowired
	private AccountMapper accountMapper;
	
    /**
     * 사용자 조회
     * @param AccountBean accountBean
     * @return List<User>
     * @throws Exception
     * @author jrkang             
     * @date 2014-03-19
     */
	@Override
	public List<AccountBean> selectAccount(AccountBean accountBean) throws Exception {
		logger.info("AccountServiceImpl > selectAccount Call");
		logger.info("id[{}], pwd[{}]", accountBean.getId(), accountBean.getPwd());
		
		List<AccountBean> resultList = accountMapper.selectAccount(accountBean);
		
		return resultList;
	}

	 /**
     * 사용자 리스트 조회
     * @param AccountBean accountBean
     * @return List<AccountBean>
     * @throws Exception
     * @author jrkang             
     * @date 2014-03-19
     */
	@Override
	public List<AccountBean> selectAccountList(AccountBean accountBean) throws Exception {
		logger.debug("AccountServiceImpl > selectAccountList Call");
		logger.debug("id[{}], pwd[{}]", accountBean.getId(), accountBean.getPwd());
		
		List<AccountBean> resultList = accountMapper.selectAccountList(accountBean);
		
		return resultList;
	}
	
    /**
     * 사용자 추가
     * @param AccountBean accountBean
     * @return Integer
     * @throws Exception
     * @author jrkang             
     * @date 2014-03-24
     */
	public Integer addAccount(AccountBean accountBean) throws Exception {
		logger.debug("AccountServiceImpl > addAccount Call");
		
		return accountMapper.addAccount(accountBean);
	}
    
	/**
     * 사용자 삭제
     * @param AccountBean accountBean
     * @return Integer
     * @throws Exception
     * @author jrkang             
     * @date 2014-03-24
     */
	public Integer deleteAccount(AccountBean accountBean) throws Exception {
		logger.debug("AccountServiceImpl > deleteAccount Call");
		return accountMapper.deleteAccount(accountBean);
	}
	
}
